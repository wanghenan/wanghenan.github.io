import React, { useState, useEffect } from 'react'
import './ArticlesPage.css'

function ArticlesPage() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch articles from CSDN API
    fetch('https://blog.csdn.net/community/list-api?username=qq_33618717&page=1&size=10')
      .then(response => response.json())
      .then(data => {
        if (data.code === 0 && data.data) {
          const articleList = data.data.list.map(item => ({
            id: item.article_id,
            title: item.title,
            description: item.description || '点击查看全文',
            date: item.created_at,
            url: `https://blog.csdn.net/qq_33618717/article/details/${item.article_id}`,
            tags: item.tags ? item.tags.split(',').slice(0, 3) : ['技术'],
            viewCount: item.view_count || 0
          }))
          setArticles(articleList)
        } else {
          throw new Error('Failed to fetch articles')
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching articles:', err)
        // Use mock data as fallback
        setArticles([
          {
            id: 1,
            title: 'React 18 新特性详解',
            description: '深入了解 React 18 的并发渲染、自动批处理等新功能',
            date: '2024-03-15',
            url: 'https://blog.csdn.net/qq_33618717/article/details/136000000',
            tags: ['React', '前端'],
            viewCount: 1234
          },
          {
            id: 2,
            title: 'TypeScript 最佳实践',
            description: '分享 TypeScript 在大型项目中的使用经验和最佳实践',
            date: '2024-02-28',
            url: 'https://blog.csdn.net/qq_33618717/article/details/135999999',
            tags: ['TypeScript'],
            viewCount: 2345
          },
          {
            id: 3,
            title: '微服务架构设计模式',
            description: '探讨微服务架构中的设计模式和实践经验',
            date: '2024-01-20',
            url: 'https://blog.csdn.net/qq_33618717/article/details/135999998',
            tags: ['架构', '微服务'],
            viewCount: 3456
          },
          {
            id: 4,
            title: 'AI 智能体开发指南',
            description: '构建 AI 智能体的完整指南和实战案例',
            date: '2024-01-05',
            url: 'https://blog.csdn.net/qq_33618717/article/details/135999997',
            tags: ['AI', '智能体'],
            viewCount: 4567
          }
        ])
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="articles-page">
        <div className="articles-page__content">
          <header className="articles-page__header">
            <h1 className="articles-page__title">Articles</h1>
            <p className="articles-page__subtitle">加载中...</p>
          </header>
        </div>
      </div>
    )
  }

  return (
    <div className="articles-page">
      <div className="articles-page__content">
        <header className="articles-page__header">
          <h1 className="articles-page__title">Articles</h1>
          <p className="articles-page__subtitle">
            技术博客与经验分享 · {articles.length} 篇文章
          </p>
        </header>

        {error && (
          <p className="articles-page__error">{error}</p>
        )}

        <div className="articles-page__list">
          {articles.map(article => (
            <a 
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="articles-page__item"
            >
              <div className="articles-page__item-header">
                <h2 className="articles-page__item-title">{article.title}</h2>
                <span className="articles-page__item-date">{article.date}</span>
              </div>
              <p className="articles-page__item-description">{article.description}</p>
              <div className="articles-page__item-footer">
                <div className="articles-page__item-tags">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="articles-page__item-tag">{tag}</span>
                  ))}
                </div>
                <span className="articles-page__item-views">👁 {article.viewCount}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="articles-page__csdn">
          <a 
            href="https://blog.csdn.net/qq_33618717"
            target="_blank"
            rel="noopener noreferrer"
            className="articles-page__csdn-link"
          >
            在 CSDN 查看更多文章 →
          </a>
        </div>
      </div>
    </div>
  )
}

export default ArticlesPage