import React from 'react'
import SwiftUIBanner from './components/SwiftUIBanner';
import BlogList from './components/BlogList';
import RelatedBlogs from './components/RelatedBlogs';
import MarketingArticles from './components/MarketingArticles';

export default function Blog() {
  return (
    <div>
      <SwiftUIBanner/>
      <BlogList/>
      <RelatedBlogs/>
      <MarketingArticles/>
    </div>
  )
}
