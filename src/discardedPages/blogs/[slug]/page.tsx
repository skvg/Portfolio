'use client'

import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

// Mock blog content - In production, you'd parse markdown files
const blogContent: any = {
  'react-performance-optimization': {
    title: 'React Performance Optimization Techniques',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'Performance', 'JavaScript', 'Web Development'],
    content: `
# React Performance Optimization Techniques

Performance is crucial for modern web applications. In this article, we'll explore various techniques to optimize React applications.

## 1. Use React.memo for Component Memoization

React.memo is a higher-order component that can help prevent unnecessary re-renders of functional components.

\`\`\`javascript
const ExpensiveComponent = React.memo(({ data }) => {
  // Component logic here
  return <div>{data}</div>;
});
\`\`\`

## 2. Implement Code Splitting

Code splitting allows you to split your code into smaller chunks that can be loaded on demand.

\`\`\`javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## 3. Optimize useEffect Dependencies

Always specify the correct dependencies in useEffect to avoid unnecessary re-runs.

## 4. Use Virtual Scrolling for Large Lists

For rendering large lists, implement virtual scrolling using libraries like react-window or react-virtualized.

## 5. Optimize Images

- Use modern image formats (WebP, AVIF)
- Implement lazy loading
- Use responsive images with srcset

## Conclusion

By implementing these optimization techniques, you can significantly improve your React application's performance.
    `
  },
  'building-microservices-nodejs': {
    title: 'Building Scalable Microservices with Node.js',
    date: '2024-02-10',
    readTime: '12 min read',
    tags: ['Node.js', 'Microservices', 'Docker', 'Architecture'],
    content: `
# Building Scalable Microservices with Node.js

Microservices architecture has become the go-to solution for building scalable applications.

## Why Microservices?

Microservices offer several advantages:
- **Scalability**: Scale individual services independently
- **Flexibility**: Use different technologies for different services
- **Resilience**: Failure in one service doesn't bring down the entire system

## Architecture Overview

A typical microservices architecture includes:
1. API Gateway
2. Service Discovery
3. Load Balancer
4. Individual Services
5. Message Queue

## Building Your First Microservice

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/users/:id', async (req, res) => {
  const user = await getUserById(req.params.id);
  res.json(user);
});

app.listen(3001);
\`\`\`

## Best Practices

1. Use API Gateway
2. Implement Circuit Breakers
3. Monitor Everything
4. Implement Health Checks
5. Use Service Mesh

## Conclusion

Building microservices requires careful planning and implementation.
    `
  },
  'nextjs-14-app-router': {
    title: 'Next.js 14: App Router Deep Dive',
    date: '2024-03-05',
    readTime: '10 min read',
    tags: ['Next.js', 'React', 'Web Development', 'Server Components'],
    content: `
# Next.js 14: App Router Deep Dive

Next.js 14 introduces significant improvements to the App Router.

## What's New in Next.js 14?

- Improved performance with Turbopack
- Server Actions (Stable)
- Partial Prerendering
- Enhanced metadata API
- Better error handling

## File-based Routing

The App Router uses a file-system based routing.

## Server Components by Default

All components in the app directory are Server Components by default.

\`\`\`tsx
async function BlogPost({ params }) {
  const post = await fetchPost(params.slug);
  return <article><h1>{post.title}</h1></article>;
}
\`\`\`

## Client Components

Use 'use client' directive for interactive components.

## Server Actions

Server Actions allow you to run server-side code directly from your components.

## Conclusion

Next.js 14's App Router brings powerful features that make building modern web applications easier.
    `
  }
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogContent[slug]

  if (!post) {
    return <div>Blog post not found</div>
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/blogs"
          className="inline-flex items-center text-gray-600 hover:text-red-500 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to all posts
        </Link>
      </div>

      {/* Blog Post */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
            <div className="flex items-center mr-6">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-200">
            {post.tags.map((tag: string) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {post.content.split('\n').map((line: string, i: number) => {
                // Handle headings
                if (line.startsWith('# ')) {
                  return <h1 key={i} className="text-4xl font-bold mt-8 mb-4 text-gray-900">{line.slice(2)}</h1>
                }
                if (line.startsWith('## ')) {
                  return <h2 key={i} className="text-3xl font-bold mt-6 mb-3 text-gray-900">{line.slice(3)}</h2>
                }
                // Handle code blocks
                if (line.startsWith('```')) {
                  return null // Skip code block markers
                }
                // Handle list items
                if (line.trim().startsWith('- ')) {
                  return <li key={i} className="ml-6 mb-2">{line.trim().slice(2)}</li>
                }
                if (/^\d+\. /.test(line.trim())) {
                  return <li key={i} className="ml-6 mb-2 list-decimal">{line.trim().replace(/^\d+\. /, '')}</li>
                }
                // Handle bold text
                if (line.includes('**')) {
                  const parts = line.split('**')
                  return (
                    <p key={i} className="mb-4">
                      {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
                    </p>
                  )
                }
                // Regular paragraphs
                if (line.trim()) {
                  return <p key={i} className="mb-4">{line}</p>
                }
                return null
              })}
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <Footer />
    </main>
  )
}
