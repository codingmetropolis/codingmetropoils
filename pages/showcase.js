import { ShowCase } from "@/sections"
import Head from "next/head"
import React from "react"

const showcase = () => {
  return (
    <>
      <Head>
        <title>Showcase - CodeMadeBiz</title>
        <meta name="description" content="Explore CodeMadeBiz's portfolio showcasing our best work in website development, mobile applications, branding, and digital marketing projects for diverse clients." />
      </Head>
      <ShowCase />
    </>
  )
}

export default showcase
