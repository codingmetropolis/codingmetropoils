import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-transpixellent" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/images/l1.svg" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codemadebiz.com" />
        <meta property="og:title" content="Code Made Biz - Digital Agency for Websites, Apps & AI Solutions" />
        <meta property="og:description" content="Code Made Biz is a full-service digital agency specializing in website development, mobile apps, AI & ML solutions, branding, and digital marketing. We build digital experiences that drive growth." />
        <meta property="og:image" content="/images/social-media.jpg" />
        <meta property="og:site_name" content="CodeMadeBiz" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="CodeMadeBiz" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://codemadebiz.com" />
        <meta property="twitter:title" content="Code Made Biz - Digital Agency for Websites, Apps & AI Solutions" />
        <meta property="twitter:description" content="Code Made Biz is a full-service digital agency specializing in website development, mobile apps, AI & ML solutions, branding, and digital marketing. We build digital experiences that drive growth." />
        <meta property="twitter:image" content="/images/social-media.jpg" />
        <meta property="twitter:site" content="@codemadebiz" />
        <meta property="twitter:creator" content="@codemadebiz" />
        <meta property="twitter:label1" content="Established" />
        <meta property="twitter:data1" content="2020" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="rating" content="general" />
        <meta name="subject" content="Digital Agency, Web Development, Mobile Apps, AI Solutions" />
        <meta name="category" content="Technology" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="author" content="CodeMadeBiz" />
        <meta name="designer" content="CodeMadeBiz" />
        <meta name="copyright" content="CodeMadeBiz" />
        <link rel="canonical" href="https://codemadebiz.com" />
        <link rel="alternate" href="https://codemadebiz.com" hreflang="en" />
      </Head>
      <body>
        <Main />
        <NextScript />
    
      </body>
    </Html>
  )
}
