'use client'

import { Linkedin, Github, Twitter, Mail, Menu, X, FileText, Layers } from 'lucide-react'
import Image from 'next/image'
import myImage from './Surendra_Digital_Illustration.png';
import { useState } from 'react'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="mailto:surendra.kumar.devara@gmail.com" className="text-gray-600 flex items-center text-sm sm:text-base">
              <Mail className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">surendra.kumar.devara@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <NavButton icon={Layers} label="Works" />
            <NavButton icon={FileText} label="Resume" />
            <NavButton icon={Layers} label="Shelf" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300">
            <div className="p-4">
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              <nav className="mt-12 space-y-2">
                <SidebarLink icon={Layers} label="Works" onClick={() => setSidebarOpen(false)} />
                <SidebarLink icon={FileText} label="Resume" onClick={() => setSidebarOpen(false)} />
                <SidebarLink icon={Layers} label="Shelf" onClick={() => setSidebarOpen(false)} />
              </nav>
            </div>
          </div>
        </>
      )}

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full text-sm mb-6">
                It's me
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2">
                Surendra
              </h1>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Kumar
              </h1>
              <p className="text-xl text-gray-600 font-semibold mb-6">
                SOFTWARE ENGINEER
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Full Stack Software Engineer from India with extensive experience in building 
                scalable applications using cutting-edge technologies. Specialized in React.js, 
                Next.js, and modern web development practices.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                <a 
                  href="https://www.linkedin.com/in/skvg" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                >
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </a>
                <a 
                  href="https://github.com/skvg"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                </a>
                {/* <a 
                  href="https://twitter.com/surendrakumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                >
                  <Twitter className="w-5 h-5 text-gray-700" />
                </a> */}
              </div>

              {/* CTA Button */}
              <a
                href="mailto:surendra.kumar.devara@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                let's talk
              </a>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center">
              <Image src={myImage} alt='myImage' style={{objectFit: 'contain', maxHeight:'500px'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Tech Stack Grid */}
          <div className="">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'React.js',
                'Next.js',
                'Node.js',
                'TypeScript',
                'JavaScript',
                'HTML/CSS',
                'AWS',
                'Docker',
                'Kubernetes',
                'Git',
                'Kibana',
                'Grafana',
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-3 bg-gray-50 rounded-lg text-center text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition cursor-pointer"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Work Experience</h2>
          <div className="flex items-center mb-12">
            <p className="text-gray-600 text-lg">My Journey</p>
            <div className="ml-4 h-1 w-16 bg-gradient-to-r from-red-500 to-red-600 rounded"></div>
          </div>

          <div className="space-y-12">
            {/* Indiamart - Software Engineer */}
            <ExperienceCard
              company="Indiamart"
              role="Software Engineer"
              period="Sep 2023 - Present"
              location="Noida"
              highlights={[
                'Spearheaded migration of critical seller features to React.js, enhancing UX and modernizing frontend architecture',
                'Developed \'Buyleads\' Next.js application with advanced listing, search, and filter capabilities',
                'Drove performance initiatives: AJAX optimization, Web Vitals improvement, chunk reduction',
                'Established CI/CD infrastructure and implemented feature enhancements',
              ]}
            />

            {/* Indiamart - Associate Software Engineer */}
            <ExperienceCard
              company="Indiamart"
              role="Associate Software Engineer"
              period="May 2022 - Sep 2023"
              location="Noida"
              highlights={[
                'Led migration of key modules from legacy PHP/jQuery to React/Node',
                'Developed complex full-stack features for buyer/seller workflows',
                'Mentored team members in React, accelerating modern codebase adoption',
                'Implemented Kibana logging and Google Ads integration',
              ]}
            />

            {/* Datagrokr */}
            <ExperienceCard
              company="Datagrokr"
              role="Full Stack Developer & Intern"
              period="July 2021 - May 2022"
              location="Bengaluru"
              highlights={[
                'Architected complete frontend for COI Rewrite project using React',
                'Enhanced backend APIs with VERISK data augmentation',
                'Utilized AWS services (S3, Lambda, SQS, DynamoDB, IAM)',
                'Completed AWS deployment and management assignments',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Achievements</h2>
          <div className="flex items-center mb-8">
            <p className="text-gray-600 text-lg">Recognition & Awards</p>
            <div className="ml-4 h-1 w-16 bg-gradient-to-r from-red-500 to-red-600 rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <AchievementCard
              title="3rd Place - GenAI Hackathon"
              description="Secured 3rd position in Indiamart's First GenAI hackathon out of 35 teams"
              icon="🏆"
            />
            <AchievementCard
              title="Best Performer of the Month"
              description="Awarded Best Performer for November 2023 at Indiamart"
              icon="⭐"
            />
            <AchievementCard
              title="Rocket Recruit Award"
              description="Outstanding work performance in Q1 2022 at Datagrokr"
              icon="🚀"
            />
            <AchievementCard
              title="CodeChef Global Rank 88"
              description="Ranked 88 globally in CodeChef October 2020 Lunchtime challenge (Div.1)"
              icon="💻"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              © 2025 Surendra Kumar. All rights reserved.
            </p>
            <div className="hidden md:flex flex space-x-6">
              <a href="https://www.linkedin.com/in/skvg" className="text-gray-600 hover:text-red-500 transition">
                LinkedIn
              </a>
              <a href="https://github.com/skvg" className="text-gray-600 hover:text-red-500 transition">
                GitHub
              </a>
              <a href="mailto:surendra.kumar.devara@gmail.com" className="text-gray-600 hover:text-red-500 transition">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Navigation Button Component with hover tilt effect
function NavButton({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <button className="group px-4 py-2 text-gray-700 hover:text-white font-medium flex items-center rounded-lg transition-all duration-300 hover:bg-red-500 perspective-1000">
      <span className="flex items-center transform group-hover:rotate-y-12 transition-transform duration-300">
        <Icon className="w-4 h-4 mr-2" />
        {label}
      </span>
    </button>
  )
}

// Sidebar Link Component
function SidebarLink({ icon: Icon, label, onClick }: { icon: any; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200"
    >
      <Icon className="w-5 h-5 mr-3" />
      <span className="font-medium">{label}</span>
    </button>
  )
}

function ExperienceCard({
  company,
  role,
  period,
  location,
  highlights,
}: {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}) {
  return (
    <div className="border-l-4 border-red-500 pl-8 pb-8 relative">
      <div className="absolute -left-3 top-0 w-6 h-6 bg-red-500 rounded-full border-4 border-white"></div>
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900">{company}</h3>
        <p className="text-lg text-red-500 font-semibold">{role}</p>
        <p className="text-gray-500">
          {period} • {location}
        </p>
      </div>
      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function AchievementCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: string
}) {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-md transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
