import fs from 'fs'
import path from 'path'
import { marked } from 'marked'

const KNOWLEDGE_BASE = '/Users/lu.gao/workspace/personal/知识库'
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'articles-data.js')

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList)
    } else if (file.endsWith('.md')) {
      fileList.push(filePath)
    }
  })
  
  return fileList
}

function parseFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
  let frontmatter = {}
  let body = content
  
  if (frontmatterMatch) {
    const frontmatterText = frontmatterMatch[1]
    body = content.replace(frontmatterMatch[0], '').trim()
    
    frontmatterText.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':')
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim()
        if (value.startsWith('[') && value.endsWith(']')) {
          frontmatter[key.trim()] = value.slice(1, -1).split(',').map(s => s.trim().replace(/['"]/g, ''))
        } else {
          frontmatter[key.trim()] = value.replace(/['"]/g, '')
        }
      }
    })
  }
  
  return { frontmatter, body }
}

function extractMetadata(filePath, content, body) {
  const filename = path.basename(filePath, '.md')
  const dirName = path.dirname(filePath).split('/').pop()
  
  // 从 frontmatter 获取
  const { frontmatter } = parseFrontmatter(content)
  
  // 从文件名提取标题（移除目录名前缀）
  let title = filename
  const prefixMatch = filename.match(/^\d+[-_]?/)
  if (prefixMatch) {
    title = filename.replace(prefixMatch[0], '').trim()
  }
  // 移除 "XXX - " 前缀
  title = title.replace(/^[^\s-]+[\s-]\s*/, '')
  // 移除 .md 扩展名
  title = title.replace(/\.md$/, '')
  
  // 生成描述（取正文前200字）
  const description = body.replace(/[#*`\[\]]/g, '').substring(0, 200).trim() + '...'
  
  // 从文件修改时间获取日期
  const stats = fs.statSync(filePath)
  const date = stats.mtime.toISOString().split('T')[0]
  
  // 生成阅读时间（基于字符数估算）
  const words = body.replace(/[#*`\[\]]/g, '').length
  const readTime = Math.max(1, Math.ceil(words / 500)) + '分钟'
  
  // 生成标签
  const tags = frontmatter.tags || [dirName, '技术文章']
  
  // 类别前缀（从目录名提取）
  const categoryPrefix = dirName.replace(/^(\d+[-_]?)/, '').trim()
  
  return {
    id: Date.now() + Math.random(),
    title: `[${categoryPrefix}] ${title}`,
    description,
    content: body,
    tags,
    date,
    readTime,
    views: Math.floor(Math.random() * 5000) + 100
  }
}

function generateArticles() {
  console.log('📚 开始生成文章数据...')
  
  const files = getAllFiles(KNOWLEDGE_BASE)
  console.log(`找到 ${files.length} 篇文章`)
  
  const articles = files.map(filePath => {
    const content = fs.readFileSync(filePath, 'utf-8')
    const { body } = parseFrontmatter(content)
    const metadata = extractMetadata(filePath, content, body)
    
    // 使用 marked 渲染 Markdown
    metadata.html = marked(body)
    
    return metadata
  })
  
  // 按日期排序
  articles.sort((a, b) => new Date(b.date) - new Date(a.date))
  
  // 生成 JavaScript 文件
  const jsContent = `// 自动生成的文章数据
// 生成时间: ${new Date().toISOString()}
// 数据来源: ${KNOWLEDGE_BASE}

export const articlesData = ${JSON.stringify(articles, null, 2)}

export const lastUpdated = '${new Date().toISOString()}'
`
  
  fs.writeFileSync(OUTPUT_FILE, jsContent, 'utf-8')
  console.log(`✅ 已生成 ${articles.length} 篇文章到 ${OUTPUT_FILE}`)
  
  // 打印统计
  const tagsCount = {}
  articles.forEach(article => {
    article.tags.forEach(tag => {
      tagsCount[tag] = (tagsCount[tag] || 0) + 1
    })
  })
  
  console.log('\n📊 文章统计:')
  console.log(`总文章数: ${articles.length}`)
  console.log('标签分布:', tagsCount)
}

generateArticles()
