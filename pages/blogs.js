import { Blog } from "@/sections"
import Head from "next/head"

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blog - CodeMadeBiz</title>
        <meta name="description" content="Read the latest insights, tips, and trends in web development, app development, AI, branding, and digital marketing from CodeMadeBiz experts." />
      </Head>
      <Blog />
    </>
  )
}

export default Blogs
