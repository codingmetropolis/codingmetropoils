import { Title, TitleSm } from "@/components/common/Title"
import Link from "next/link"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>+91 8762363186</h3>
                  <span>Call us: 24X7</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Bengaluru</h3>
                  <span>We Work Remotely</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>contact@codemadebiz.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>hr@codemadebiz.com</h3>
                  <span>Career at CodeMadeBiz</span>
                </div>
              </div>
              <ul>
              <li className='icon'>
                  <Link href='https://www.facebook.com/codemadebiz'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li className='icon'>
                  <Link href='https://www.youtube.com/@codemadebiz'>
                    <AiFillYoutube size={25} />
                  </Link>
                </li>
                <li className='icon'>
                  <Link href='https://www.instagram.com/codemadebiz/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li className='icon'>
                  <Link href='https://www.linkedin.com/company/codemadebiz'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
                <li className='icon'>
                  <Link href='https://x.com/codemadebiz'>
                    <AiFillTwitterCircle size={25} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name*</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email/Phone*</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
