import Link from "next/link"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"

export const Card = ({ data, caption, show, path }) => {
  const href = path ? `/${path}/${data.slug || data.id}` : "/contact"

  return (
    <>
      <div className='card'>
        <div className='card-img'>
          <img src={data.cover} alt={data.title} />
        </div>
        <div className='card-details'>
          <Link href={href} className='title-link'>
            <TitleSm title={data.title} />
          </Link>
          {caption && (
            <Link href={href}>
              {caption} <HiOutlineArrowRight className='link-icon' />
            </Link>
          )}
          <div className='flex'>
            <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
          </div>

          {show && data.desc && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
