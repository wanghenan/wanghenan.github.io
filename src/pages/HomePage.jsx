import React from 'react'
import './HomePage.css'

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__content">
        {/* Profile Section */}
        <div className="homepage__profile">
          <img 
            className="homepage__avatar"
            src="https://ui-avatars.com/api/?name=Hernon&background=667eea&color=fff&size=128" 
            alt="Hernon"
          />
          <div className="homepage__profile-text">
            <h1 className="homepage__name">Hernon</h1>
            <p className="homepage__title">独立开发者 / 科技博主</p>
          </div>
        </div>

        {/* Tags */}
        <div className="homepage__tags">
          <span className="homepage__tag">AI智能体</span>
          <span className="homepage__tag">微服务架构</span>
          <span className="homepage__tag">AI绘画</span>
        </div>

        {/* Description */}
        <p className="homepage__description">
          专注于 AI 智能体开发与微服务架构，分享技术博客与实践经验。
        </p>

        {/* Links */}
        <div className="homepage__links">
          <a 
            className="homepage__link" 
            href="https://blog.csdn.net/qq_33618717" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            📝 CSDN 博客
          </a>
          <a 
            className="homepage__link" 
            href="https://www.xiaohongshu.com/user/profile/6471d187000000002a03561e" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            📕 小红书
          </a>
          <a 
            className="homepage__link" 
            href="https://github.com/wanghenan" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage