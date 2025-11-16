'use client'

import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Mock blog data - In production, you'd fetch this from your markdown files
const blogs = [
  {
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization Techniques',
    date: '2024-01-15',
    excerpt: 'Learn advanced techniques to optimize your React applications for better performance and user experience.',
    tags: ['React', 'Performance', 'JavaScript', 'Web Development'],
    readTime: '8 min read'
  },
  {
    slug: 'building-microservices-nodejs',
    title: 'Building Scalable Microservices with Node.js',
    date: '2024-02-10',
    excerpt: 'A comprehensive guide to building and deploying scalable microservices architecture using Node.js and Docker.',
    tags: ['Node.js', 'Microservices', 'Docker', 'Architecture'],
    readTime: '12 min read'
  },
  {
    slug: 'nextjs-14-app-router',
    title: 'Next.js 14: App Router Deep Dive',
    date: '2024-03-05',
    excerpt: 'Explore the powerful features of Next.js 14\'s App Router and learn how to build modern web applications.',
    tags: ['Next.js', 'React', 'Web Development', 'Server Components'],
    readTime: '10 min read'
  }
]

export default function BlogsPage() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header - Same as main page */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r sm:py-16 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-red-500">
            Thoughts on software development, technology, and building great products
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-12 py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

function BlogCard({ blog }: { blog: any }) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(blog.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
            <span className="mx-2">•</span>
            <span>{blog.readTime}</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-red-500 transition-colors">
            {blog.title}
          </h2>
          
          <p className="text-gray-600 mb-4 flex-1">
            {blog.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.slice(0, 3).map((tag: string) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center text-red-500 font-semibold">
            Read More
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
    </Link>
  )
}
