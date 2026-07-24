import { Hero } from "@/sections"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Made Biz - Digital Agency for Websites, Apps & AI Solutions</title>
        <meta name="description" content="Code Made Biz is a full-service digital agency specializing in website development, mobile apps, AI & ML solutions, branding, and digital marketing. We build digital experiences that drive growth." />
      </Head>
      <Hero />
    </>
  )
}
