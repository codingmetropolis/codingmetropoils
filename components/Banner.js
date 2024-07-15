import React from "react"
import { Title, TitleLogo } from "./common/Title"
import Link from "next/link"

const Banner = () => {
  return (
    <>
      <section className='banner' style={{marginBottom:40}}>
        <div className='container'>
          <div>
            <Title title='We are looking forward to start a new project' /> <br />
            <TitleLogo title='Lets take your business to the next level!' />
          </div>
          <div>
            <Link href='/appointment' className='button-primary'>Request for quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
