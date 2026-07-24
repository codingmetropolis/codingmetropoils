import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

<div className='content flex1'>
             <div className='left w-60 py'>
               <TitleSm title='Turning your business ideas into smart digital products since 2001' />
               <p className='desc-p'>We specialize in creating custom digital solutions that drive real business results. From modern websites and e-commerce platforms to mobile apps and digital marketing strategies, our team combines technical expertise with creative thinking to help businesses thrive in the digital landscape.</p>
                <div className='grid-3'>
                  <div className='box'>
                    <h1 className='indigo'>10+</h1>
                    <h3>Years of experience</h3>
                  </div>
                  <div className='box'>
                    <h1 className='indigo'>12+</h1>
                    <h3>Industry awards</h3>
                  </div>
                </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
<div className='right w-60 ml'>
               <TitleSm title='Our mission' />
               <br />
               <p className='misson-p'>Our mission is to empower businesses with innovative digital solutions that are not only visually stunning but also highly functional and user-friendly. We believe in building long-term partnerships with our clients, understanding their unique challenges, and delivering measurable results that contribute to their growth and success.</p>
             </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
