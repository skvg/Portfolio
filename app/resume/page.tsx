'use client'

import { Download, ArrowLeft, Mail } from 'lucide-react'
import Link from 'next/link'

export default function ResumePage() {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/Resume-2025.pdf'
    link.download = 'Surendra_Kumar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link 
              href="/"
              className="flex items-center text-gray-700 hover:text-red-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              
              <button
                onClick={handleDownload}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Resume Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Title Section */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">Surendra Kumar</h1>
            <p className="text-red-100">Software Engineer Resume</p>
          </div>

          {/* PDF Viewer */}
          <div className="pt-0 p-4 sm:p-8 sm:pt-0">
            <div className="bg-gray-50 rounded-lg overflow-hidden border-2 border-gray-200">
              {/* PDF Embed */}
              <div className="w-full" style={{ height: 'calc(100vh - 250px)', minHeight: '600px' }}>
                <iframe
                  src="/Resume-2025.pdf"
                  className="w-full h-full"
                  title="Surendra Kumar Resume"
                />
              </div>
            </div>

            {/* Alternative View Message */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                Can't view the resume? 
              </p>
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-50 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Experience</h3>
            <p className="text-gray-600">4+ years in Full Stack Development</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Education</h3>
            <p className="text-gray-600">B.Tech CSE from IIIT Una</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Current Role</h3>
            <p className="text-gray-600">Software Engineer at Indiamart</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600">
            <p>© 2025 Surendra Kumar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
