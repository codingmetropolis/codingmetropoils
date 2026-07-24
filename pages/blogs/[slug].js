import Head from "next/head"
import Link from "next/link"
import { latestArticles2026 } from "@/assets/data/latestArticles2026"
import { Title, TitleSm } from "@/components/common/Title"
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi"

const BlogPost = ({ article, related }) => {
  return (
    <>
      <Head>
        <title>{article.title} - Code Made Biz</title>
        <meta name='description' content={article.excerpt} />
      </Head>

      <section className='blog-post agency bg-top'>
        <div className='container'>
          <div className='blog-post-header'>
            <Link href='/blogs' className='blog-post-back'>
              <HiOutlineArrowLeft size={18} /> All articles
            </Link>
            <TitleSm title={article.catgeory} />
            <br />
            <br />
            <Title title={article.title} />
            <div className='blog-post-meta'>
              <span>{article.date}</span>
              <span>/</span>
              <span>{article.readTime}</span>
            </div>
            <p className='blog-post-excerpt'>{article.excerpt}</p>
          </div>

          <div className='blog-post-image'>
            <img src={article.cover} alt={article.title} />
          </div>

          <article className='blog-post-content'>
            {article.content.map((block, index) => {
              if (block.type === "heading") {
                return <h2 key={index}>{block.text}</h2>
              }
              if (block.type === "list") {
                return (
                  <ul key={index}>
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )
              }
              return <p key={index}>{block.text}</p>
            })}
          </article>

          <div className='blog-post-cta'>
            <TitleSm title='READY TO BUILD?' />
            <br />
            <p>Let’s turn these ideas into a website, app, or growth campaign for your brand.</p>
            <Link href='/contact' className='button-primary'>
              Talk to our team <HiOutlineArrowRight className='link-icon' />
            </Link>
          </div>

          {related.length > 0 && (
            <div className='blog-post-related'>
              <div className='blog-post-related-title'>
                <TitleSm title='MORE ARTICLES' />
              </div>
              <div className='blog-post-related-grid'>
                {related.map((item) => (
                  <Link href={`/blogs/${item.slug}`} key={item.id} className='blog-post-related-card'>
                    <img src={item.cover} alt={item.title} />
                    <div>
                      <span>
                        {item.catgeory} / {item.date}
                      </span>
                      <h3>{item.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: latestArticles2026.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const article = latestArticles2026.find((item) => item.slug === params.slug)

  if (!article) {
    return { notFound: true }
  }

  const related = latestArticles2026.filter((item) => item.id !== article.id).slice(0, 3)

  return {
    props: {
      article,
      related,
    },
  }
}

export default BlogPost
