'use client'

import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import Link from 'next/link'
import { useState } from 'react'

// Mock projects data
const projects = [
  {
    slug: 'buyleads-nextjs-app',
    title: 'Buyleads Next.js Application',
    description: 'A high-performance B2B marketplace application built with Next.js, featuring advanced listing, search, and filtering capabilities integrated within Android app via WebView.',
    image: '/project-images/buyleads.jpg',
    tags: ['Next.js', 'React', 'TypeScript', 'WebView', 'Performance'],
    category: 'Web Application',
    year: '2024'
  },
  {
    slug: 'seller-dashboard-migration',
    title: 'Seller Dashboard Migration',
    description: 'Led the migration of critical seller features from legacy PHP/jQuery to modern React.js stack, significantly improving user experience and maintainability.',
    image: '/project-images/seller-dashboard.jpg',
    tags: ['React', 'Redux', 'Node.js', 'Migration', 'PHP'],
    category: 'Enterprise Application',
    year: '2023'
  },
  {
    slug: 'coi-rewrite-platform',
    title: 'COI Rewrite Platform',
    description: 'Architected and developed complete frontend for insurance verification platform with AWS integration and VERISK data augmentation.',
    image: '/project-images/coi-platform.jpg',
    tags: ['React', 'AWS', 'Lambda', 'DynamoDB', 'S3'],
    category: 'SaaS Platform',
    year: '2022'
  },
  {
    slug: 'performance-optimization-suite',
    title: 'Performance Optimization Suite',
    description: 'Implemented comprehensive performance improvements including AJAX optimization, Web Vitals enhancement, and chunk reduction across multiple applications.',
    image: '/project-images/performance.jpg',
    tags: ['Performance', 'Optimization', 'Web Vitals', 'Webpack'],
    category: 'Infrastructure',
    year: '2023'
  },
  {
    slug: 'buyer-tools-platform',
    title: 'Buyer Tools Platform',
    description: 'Developed full-stack buyer tools with React/Node.js, providing comprehensive analytics and management features for B2B buyers.',
    image: '/project-images/buyer-tools.jpg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Analytics'],
    category: 'Web Application',
    year: '2023'
  },
  {
    slug: 'cicd-infrastructure',
    title: 'CI/CD Infrastructure',
    description: 'Established comprehensive CI/CD pipelines using GitLab CI, Docker, and Kubernetes for automated testing and deployment.',
    image: '/project-images/cicd.jpg',
    tags: ['CI/CD', 'Docker', 'Kubernetes', 'GitLab', 'DevOps'],
    category: 'Infrastructure',
    year: '2024'
  }
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r sm:py-16 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">My Work</h1>
          <p className="text-xl text-red-500">
            A showcase of projects I've built and contributed to
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
        {/* Project Image Placeholder */}
        <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
          <span className="text-white text-6xl font-bold opacity-20">
            {project.title.charAt(0)}
          </span>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-red-500">{project.category}</span>
            <span className="text-sm text-gray-500">{project.year}</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-500 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-600 mb-4 flex-1">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag: string) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
