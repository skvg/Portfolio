'use client'

import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

// Mock project details
const projectDetails: any = {
  'buyleads-nextjs-app': {
    title: 'Buyleads Next.js Application',
    category: 'Web Application',
    year: '2024',
    description: 'A high-performance B2B marketplace application built with Next.js, featuring advanced listing, search, and filtering capabilities integrated within Android app via WebView.',
    challenge: 'Build a performant web application that seamlessly integrates with an Android app while providing complex search and filtering features for B2B buyers.',
    solution: 'Developed a Next.js application optimized for WebView integration with server-side rendering for better performance, implemented advanced filtering logic, and optimized for mobile devices.',
    technologies: ['Next.js', 'React', 'TypeScript', 'WebView', 'REST APIs', 'Performance Optimization'],
    features: [
      'Advanced product listing with infinite scroll',
      'Multi-faceted search and filtering system',
      'Optimized for WebView integration',
      'Server-side rendering for better SEO',
      'Back-press handling for mobile navigation',
      'Performance optimization with code splitting'
    ],
    impact: [
      'Improved page load time by 40%',
      'Enhanced user engagement by 35%',
      'Seamless integration with Android app',
      'Reduced bounce rate by 25%'
    ],
    githubUrl: '',
    liveUrl: ''
  },
  'seller-dashboard-migration': {
    title: 'Seller Dashboard Migration',
    category: 'Enterprise Application',
    year: '2023',
    description: 'Led the migration of critical seller features from legacy PHP/jQuery to modern React.js stack, significantly improving user experience and maintainability.',
    challenge: 'Migrate a complex legacy PHP/jQuery application to modern React stack without disrupting existing users and while maintaining all functionality.',
    solution: 'Implemented incremental migration strategy, created comprehensive component library, and ensured backward compatibility during transition period.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'PHP', 'MySQL'],
    features: [
      'Modern React component architecture',
      'State management with Redux',
      'RESTful API integration',
      'Real-time updates',
      'Comprehensive analytics dashboard',
      'User-friendly interface redesign'
    ],
    impact: [
      'Reduced maintenance costs by 50%',
      'Improved application performance by 60%',
      'Enhanced developer productivity',
      'Better user satisfaction scores'
    ],
    githubUrl: '',
    liveUrl: ''
  },
  'coi-rewrite-platform': {
    title: 'COI Rewrite Platform',
    category: 'SaaS Platform',
    year: '2022',
    description: 'Architected and developed complete frontend for insurance verification platform with AWS integration and VERISK data augmentation.',
    challenge: 'Build a scalable insurance verification platform that integrates with multiple data sources and provides real-time verification.',
    solution: 'Developed microservices-based architecture using AWS services, implemented data augmentation pipelines, and created intuitive user interface for complex workflows.',
    technologies: ['React', 'AWS Lambda', 'DynamoDB', 'S3', 'SQS', 'IAM', 'Node.js'],
    features: [
      'Automated certificate verification',
      'VERISK data integration',
      'Real-time status tracking',
      'Document management system',
      'AWS Lambda for serverless processing',
      'Scalable architecture'
    ],
    impact: [
      'Processed 10,000+ verifications monthly',
      '99.9% uptime achieved',
      'Reduced verification time by 70%',
      'Improved accuracy to 98%'
    ],
    githubUrl: '',
    liveUrl: ''
  },
  'performance-optimization-suite': {
    title: 'Performance Optimization Suite',
    category: 'Infrastructure',
    year: '2023',
    description: 'Implemented comprehensive performance improvements including AJAX optimization, Web Vitals enhancement, and chunk reduction across multiple applications.',
    challenge: 'Address performance bottlenecks across multiple applications affecting user experience and SEO rankings.',
    solution: 'Conducted thorough performance audits, implemented code splitting, optimized AJAX calls, and improved Web Vitals metrics.',
    technologies: ['Webpack', 'Web Vitals', 'Performance API', 'Lighthouse', 'Chrome DevTools'],
    features: [
      'AJAX request optimization',
      'Web Vitals monitoring',
      'Code splitting implementation',
      'Chunk size reduction',
      'Image optimization',
      'Lazy loading implementation'
    ],
    impact: [
      'Improved Lighthouse scores by 45 points',
      'Reduced bundle size by 35%',
      'Better Core Web Vitals scores',
      'Improved SEO rankings'
    ],
    githubUrl: '',
    liveUrl: ''
  },
  'buyer-tools-platform': {
    title: 'Buyer Tools Platform',
    category: 'Web Application',
    year: '2023',
    description: 'Developed full-stack buyer tools with React/Node.js, providing comprehensive analytics and management features for B2B buyers.',
    challenge: 'Create a comprehensive platform for B2B buyers to manage suppliers, track orders, and analyze purchasing patterns.',
    solution: 'Built full-stack application with React frontend and Node.js backend, implemented analytics engine, and created intuitive dashboards.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Redux'],
    features: [
      'Supplier management system',
      'Order tracking dashboard',
      'Analytics and reporting',
      'Real-time notifications',
      'Data visualization',
      'Export functionality'
    ],
    impact: [
      'Improved buyer efficiency by 40%',
      'Reduced order processing time',
      'Better supplier relationships',
      'Enhanced decision making'
    ],
    githubUrl: '',
    liveUrl: ''
  },
  'cicd-infrastructure': {
    title: 'CI/CD Infrastructure',
    category: 'Infrastructure',
    year: '2024',
    description: 'Established comprehensive CI/CD pipelines using GitLab CI, Docker, and Kubernetes for automated testing and deployment.',
    challenge: 'Implement automated deployment pipeline to reduce manual errors and deployment time while ensuring code quality.',
    solution: 'Created comprehensive CI/CD pipeline with automated testing, Docker containerization, and Kubernetes orchestration.',
    technologies: ['GitLab CI', 'Docker', 'Kubernetes', 'Jenkins', 'Helm', 'Terraform'],
    features: [
      'Automated testing pipeline',
      'Docker containerization',
      'Kubernetes deployment',
      'Automated rollback capability',
      'Environment management',
      'Monitoring and alerting'
    ],
    impact: [
      'Reduced deployment time by 80%',
      'Zero-downtime deployments',
      'Improved code quality',
      'Faster time to market'
    ],
    githubUrl: '',
    liveUrl: ''
  }
}

export default function ProjectDetail() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectDetails[slug]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <Header />

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/projects"
          className="inline-flex items-center text-gray-600 hover:text-red-500 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to all projects
        </Link>
      </div>

      {/* Project Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-12 text-white">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-4 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium">
              {project.category}
            </span>
            <span className="text-red-100">{project.year}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-red-100">{project.description}</p>
        </div>
      </section>

      {/* Project Details */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Challenge */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
              <p className="text-gray-700 leading-relaxed">{project.solution}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact & Results</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.impact.map((item: string, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-red-50 to-white p-4 rounded-lg border border-red-100">
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span 
                    key={tech}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                    >
                      <span className="flex items-center">
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      <span className="flex items-center">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}