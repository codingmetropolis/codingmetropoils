import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='Metropolis' caption='Coding' className='logobg' />
              <br />
              <span>
                Questions? Reach us
                 {/* <br /> Monday – Friday from 9 am to 6 pm */}
              </span>
              <br />
              <br />
              <h3>+91 7338085595</h3>
              <br />
              <Link href='/appointment' className='button-primary'>Request for quote</Link>
           
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/'>About agency</Link>
              </li>
              <li>
                <Link href='/'>Our team</Link>
              </li>
              <li>
                <Link href='/'>Showcase</Link>
              </li>
              <li>
                <Link href='/'>Blog</Link>
              </li>
              <li>
                <Link href='/'>Demo design system</Link>
              </li>
              <li>
                <Link href='/'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/'>Web Design & Development</Link>
              </li>
              <li>
                <Link href='/'>Branding & Creative Services</Link>
              </li>
              <li>
                <Link href='/'>Digital Marketing</Link>
              </li>
              <li>
                <Link href='/'>E-Commerce</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='https://www.facebook.com/profile.php?id=61562625216744'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.youtube.com/@CodingMetropolis'>
                    <AiFillYoutube size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/codingmetropolis/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/company/coding-metropolis/?viewAsMember=true'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://x.com/cod_metropolis'>
                    <AiFillTwitterCircle size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 THE CODING-METROPOLIS. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>PRIVACY POLICY</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
