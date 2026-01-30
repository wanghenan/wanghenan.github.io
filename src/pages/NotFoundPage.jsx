import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/" className="link">Back to Home</Link>
    </>
  )
}

export default NotFoundPage