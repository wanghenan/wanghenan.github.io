import React from 'react'
import './AIProductsPage.css'

function AIProductsPage() {
  const products = [
    {
      id: 1,
      title: 'AI智能体平台',
      description: '智能体开发与部署平台',
      status: '开发中'
    },
    {
      id: 2,
      title: 'AI绘画工具',
      description: '基于深度学习的图像生成系统',
      status: '规划中'
    },
    {
      id: 3,
      title: 'AI对话助手',
      description: '智能对话与任务处理助手',
      status: 'coming soon'
    }
  ]

  return (
    <div className="ai-products-page">
      <h1>AI 产品</h1>
      <p className="intro">探索前沿AI技术与产品</p>
      
      <div className="tags">
        <span className="tag">AI智能体</span>
        <span className="tag">AI绘画</span>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span className={`status ${product.status === '开发中' ? 'development' : 'coming-soon'}`}>
              {product.status === '开发中' ? '开发中' : '即将推出'}
            </span>
          </div>
        ))}
      </div>

      <div className="coming-soon-section">
        <p>更多AI产品正在研发中...</p>
      </div>
    </div>
  )
}

export default AIProductsPage
