import React from 'react'

function ArticlesPage() {
  // Placeholder article data for design mock
  const articles = [
    {
      id: 1,
      title: 'React 18 新特性详解',
      description: '深入了解 React 18 的并发渲染、自动批处理等新功能',
      date: '2024-03-15',
      tags: ['React', '前端开发']
    },
    {
      id: 2,
      title: 'TypeScript 最佳实践',
      description: '分享 TypeScript 在大型项目中的使用经验和最佳实践',
      date: '2024-02-28',
      tags: ['TypeScript', 'JavaScript']
    },
    {
      id: 3,
      title: '微服务架构设计模式',
      description: '探讨微服务架构中的设计模式和实践经验',
      date: '2024-01-20',
      tags: ['架构', '微服务']
    },
    {
      id: 4,
      title: 'AI 智能体开发指南',
      description: '构建 AI 智能体的完整指南和实战案例',
      date: '2024-01-05',
      tags: ['AI', '智能体']
    }
  ]

  return (
    <div className="articles-page">
      <h1 className="page-title">我的文章</h1>
      <p className="page-description">主要分享技术文章，完整内容请访问 CSDN</p>
      
      <div className="articles-list">
        {articles.map(article => (
          <article key={article.id} className="article-item">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-description">{article.description}</p>
            <div className="article-meta">
              <span className="article-date">{article.date}</span>
              <div className="article-tags">
                {article.tags.map((tag, index) => (
                  <span key={index} className="article-tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="csdn-link">
        <a 
          href="https://blog.csdn.net/qq_33618717" 
          target="_blank" 
          rel="noopener noreferrer"
          className="csdn-button"
        >
          查看更多文章
        </a>
      </div>
    </div>
  )
}

export default ArticlesPage