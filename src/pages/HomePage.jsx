import React from 'react'
import './HomePage.css'

function HomePage() {
  return (
    <div className="homepage">
      <img 
        className="avatar" 
        src="https://ui-avatars.com/api/?name=Hernon&background=667eea&color=fff&size=256" 
        alt="Hernon"
      />
      <h1>HERNON</h1>
      <div className="tags">
        <span className="tag">AI智能体</span>
        <span className="tag">微服务架构</span>
        <span className="tag">AI绘画</span>
      </div>
      <div className="links">
        <a className="link" href="https://blog.csdn.net/qq_413767275" target="_blank" rel="noopener noreferrer">CSDN</a>
        <a className="link" href="https://www.xiaohongshu.com/user/profile/5f4d0f4e000000000100acd9" target="_blank" rel="noopener noreferrer">小红书</a>
        <a className="link" href="https://github.com/wanghenan" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  )
}

export default HomePage