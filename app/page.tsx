'use client'

import { Linkedin, Github } from 'lucide-react'
import Image from 'next/image'
import myImage from './Surendra_Digital_Illustration.png';
import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import { ACHEIVEMENTS, EMAIL, EXPERIENCE, TECHSTACK } from '@/content/stats/info';

export default function Home() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-2xl shadow-lg sm:p-8 p-4">
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
              </div>

              {/* CTA Button */}
              <a
                href={`mailto:${EMAIL}`}
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
        <div className="bg-white rounded-2xl shadow-lg sm:p-8 p-4">
          {/* Tech Stack Grid */}
          <div className="">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {TECHSTACK.map((tech) => (
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
        <div className="bg-white rounded-2xl shadow-lg sm:p-8 p-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Work Experience</h2>
          <div className="flex items-center mb-12">
            <p className="text-gray-600 text-lg">My Journey</p>
            <div className="ml-4 h-1 w-16 bg-gradient-to-r from-red-500 to-red-600 rounded"></div>
          </div>

          <div className="space-y-12">
            {/* Indiamart - Software Engineer */}
            {
              EXPERIENCE.map(exp => {
                return <ExperienceCard
                company={exp.company}
                role={exp.role}
                period={exp.period}
                location={exp.location}
                highlights={exp.highlights}
              />
              })
            }
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-2xl shadow-lg sm:p-8 p-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Achievements</h2>
          <div className="flex items-center mb-8">
            <p className="text-gray-600 text-lg">Recognition & Awards</p>
            <div className="ml-4 h-1 w-16 bg-gradient-to-r from-red-500 to-red-600 rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {
              ACHEIVEMENTS.map(achievement => {
                return <AchievementCard
                title={achievement.title}
                description={achievement.description}
                icon={achievement.icon}
              />
              })
            }
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
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
