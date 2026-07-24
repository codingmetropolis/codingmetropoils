import React from "react"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"

const services = [
  {
    id: 1,
    title: "Web Development",
    desc: [{ text: "Custom website development services tailored to meet the specific needs of businesses, ensuring a strong online presence and user-friendly interfaces." }],
    post: "Web Solutions",
    cover: "/images/services/web-dev.jpg"
  },
  {
    id: 2,
    title: "Cross-Platform App Development",
    desc: [{ text: "Development of mobile applications that work seamlessly across different platforms, maximizing reach and accessibility." }],
    post: "Mobile Development",
    cover: "/images/services/app-dev.jpg"
  },
  {
    id: 3,
    title: "SEO and Content Marketing",
    desc: [{ text: "Comprehensive SEO services and content marketing strategies designed to improve online visibility and drive organic traffic." }],
    post: "Digital Marketing",
    cover: "/images/services/seo.jpg"
  },
  {
    id: 4,
    title: "Social Media Management",
    desc: [{ text: "Management of social media profiles, including content creation, scheduling, and engagement strategies to enhance brand presence." }],
    post: "Social Media",
    cover: "/images/services/social-media.jpg"
  },
  {
    id: 5,
    title: "SEM and Digital Ads",
    desc: [{ text: "Strategy development and execution for search engine marketing and digital advertising campaigns to maximize return on investment." }],
    post: "Digital Advertising",
    cover: "/images/services/digital-ads.jpg"
  },
  {
    id: 6,
    title: "Tech Consulting",
    desc: [{ text: "Expert consulting services to help businesses identify their technology needs and implement the right solutions for their goals." }],
    post: "Consulting",
    cover: "/images/services/consulting.jpg"
  }
]

const Services = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='OUR SERVICES' /> <br />
            <br />
            <Title title='Comprehensive Digital Solutions' className='title-bg' />
          </div>
          <div className='services-grid py'>
            {services.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
