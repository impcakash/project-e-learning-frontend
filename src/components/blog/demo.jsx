import BlogList from './components/BlogList'
import Card from './components/Card'
import { Demo } from './components/Demo'
import MarketingArticles from './components/MarketingArticles'
import RelatedBlogs from './components/RelatedBlogs'
import SwiftUIBanner from './components/SwiftUIBanner'
function Demo() {
  
  return (
    <>
      <SwiftUIBanner/>
      {/* <Demo/>
      <h1>Hlwwww</h1>
      <Card/>
      <Card/> */}
      <BlogList/>
      <RelatedBlogs/>
      <MarketingArticles/>
  </>
  )
}

export default Demo
