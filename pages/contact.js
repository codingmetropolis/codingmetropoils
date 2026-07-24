import { Contact } from "@/sections"
import Head from "next/head"
import React from "react"

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact - CodeMadeBiz</title>
        <meta name="description" content="Get in touch with CodeMadeBiz for your digital project needs. Contact us via phone, email, or visit our Bengaluru office for website development, app creation, and digital marketing services." />
      </Head>
      <Contact />
    </>
  )
}

export default contact
