import React from 'react'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="aboutpage">
      <h1>HERNON</h1>
      <p className="introduction">独立开发者 / 科技博主</p>
      
      <p className="bio">
        专注于AI智能体开发、微服务架构设计与AI绘画技术。
        致力于探索人工智能前沿技术，分享开发经验与技术创新。
      </p>
      
      <div className="tags">
        <span className="tag">AI智能体</span>
        <span className="tag">微服务架构</span>
        <span className="tag">AI绘画</span>
      </div>
      
      <div className="links">
        <a 
          className="link" 
          href="https://blog.csdn.net/qq_33618717" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          CSDN
        </a>
        <a 
          className="link" 
          href="https://www.xiaohongshu.com/user/profile/6471d187000000002a03561e" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          小红书
        </a>
      </div>
    </div>
  )
}

export default AboutPage