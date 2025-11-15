import { ArrowLeft, Calendar, Clock, Mail, Menu, X, FileText, Layers } from 'lucide-react'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [page, setPage] = useState('');

    useEffect(() => {
        const path = window.location.pathname.split('/')[1];
        setPage(path);
    }, [])

    return (
        <header className="bg-white shadow-sm sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-red-500">HOME</span>
                </Link>

                <nav className="hidden md:flex space-x-4">
                    <NavButton icon={Layers} label="Works" href="/projects" active={page == 'projects'} />
                    <NavButton icon={FileText} label="Resume" href="/resume" active={page == 'resume'} />
                    <NavButton icon={Layers} label="Shelf" href="/blogs" active={page == 'blogs'} />
                </nav>

                <button
                    onClick={() => setSidebarOpen(true)}
                    className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
                >
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>
            </div>

            {/* Mobile Sidebar */}
            {
                sidebarOpen && <Sidebar close={() => setSidebarOpen(false)} />
            }
        </header>
    )
}


function NavButton({ icon: Icon, label, href, active }: { icon: any; label: string; href: string; active?: boolean }) {
    return (
      <Link 
        href={href} 
        className={`group px-4 py-2 font-medium flex items-center rounded-lg transition-all duration-300 ${
          active ? 'bg-red-500 text-white' : 'text-gray-700 hover:text-white hover:bg-red-500'
        }`}
      >
        <Icon className="w-4 h-4 mr-2" />
        {label}
      </Link>
    )
  }