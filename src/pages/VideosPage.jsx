import React from 'react'

function VideosPage() {
  return (
    <>
      <h1>我的视频</h1>
      <p>视频内容主要发布在小红书</p>
      
      <div className="video-grid">
        <div className="video-placeholder">
          <div className="video-icon">▶</div>
          <p>视频 1</p>
        </div>
        <div className="video-placeholder">
          <div className="video-icon">▶</div>
          <p>视频 2</p>
        </div>
        <div className="video-placeholder">
          <div className="video-icon">▶</div>
          <p>视频 3</p>
        </div>
        <div className="video-placeholder">
          <div className="video-icon">▶</div>
          <p>视频 4</p>
        </div>
      </div>

      <a 
        className="link" 
        href="https://www.xiaohongshu.com/user/profile/6471d187000000002a03561e" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        查看完整视频内容 →
      </a>
    </>
  )
}

export default VideosPage