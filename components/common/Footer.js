import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"
import { HiOutlineClipboardCopy } from "react-icons/hi"
import { useState, useEffect } from "react"

const Footer = () => {
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [currentYear, setCurrentYear] = useState("");
  
  const phoneNumber = "+918762363186";
  const email = "contact@codemadebiz.com";
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);
  
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'phone') {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
      } else {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      }
    });
  };
  
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='Biz' caption='CodeMade' className='logobg' />
              <br />
              <span>
                Questions? Reach us
              </span>
              <br />
              <br />
              <div className="contact-item">
                <a 
                  href={`https://wa.me/${phoneNumber.replace('+', '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <h3>{phoneNumber}</h3>
                </a>
                <button 
                  onClick={() => copyToClipboard(phoneNumber, 'phone')} 
                  className="copy-button"
                  aria-label="Copy phone number"
                  title="Copy phone number"
                >
                  <HiOutlineClipboardCopy size={20} />
                  {phoneCopied && <span className="copied-tooltip">Copied!</span>}
                </button>
              </div>
              
              <div className="contact-item">
                <a 
                  href={`mailto:${email}`}
                  className="contact-link"
                >
                  <h3>{email}</h3>
                </a>
                <button 
                  onClick={() => copyToClipboard(email, 'email')} 
                  className="copy-button"
                  aria-label="Copy email"
                  title="Copy email"
                >
                  <HiOutlineClipboardCopy size={20} />
                  {emailCopied && <span className="copied-tooltip">Copied!</span>}
                </button>
              </div>
              <br />
              <Link href='/appointment' className='button-primary'>Request for quote</Link>
            </div>
            
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/'>About agency</Link>
              </li>
              {/* <li>
                <Link href='/'>Our team</Link>
              </li> */}
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
                  <Link href='https://www.facebook.com/codemadebiz'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.youtube.com/@codemadebiz'>
                    <AiFillYoutube size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/codemadebiz/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/company/codemadebiz'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://x.com/codemadebiz'>
                    <AiFillTwitterCircle size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© {currentYear} THE CodeMadeBiz. ALL RIGHTS RESERVED.</span>
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
