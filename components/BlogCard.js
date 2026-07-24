import React from "react"
import { Card } from "./common/Card"
import { latestArticles2026 } from "@/assets/data/latestArticles2026"

const BlogCard = () => {
  return (
    <>
      <div className='container blog-card grid-2 py'>
        {latestArticles2026.map((item) => (
          <Card data={item} key={item.id} path='blogs' />
        ))}
      </div>
    </>
  )
}

export default BlogCard
