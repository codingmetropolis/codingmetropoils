import { Title, TitleSm } from "@/components/common/Title"
import { BlogCard } from "@/components/router"
import React from "react"

const Blog = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='BLOG' /> <br />
            <br />
            <Title title='Our views on marketing, design & technology' />
          </div>
        </div>
        <BlogCard />
      </section>
    </>
  )
}

export default Blog
