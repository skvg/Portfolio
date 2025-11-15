import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Mail, Menu, X, FileText, Layers } from 'lucide-react'
import { useEffect, useState } from "react";

export default function Sidebar({close} : {close: ()=>void}) {
    const [page, setPage] = useState('');

    useEffect(() => {
        const path = window.location.pathname.split('/')[1];
        setPage(path);
    }, [])

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={close}
            ></div>
            <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 md:hidden">
                <div className="p-4">
                    <button
                        onClick={close}
                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition"
                    >
                        <X className="w-6 h-6 text-gray-700" />
                    </button>
                    <nav className="mt-12 space-y-2">
                        <SidebarLink icon={Layers} label="Works" href="/projects" onClick={close} active={page == 'projects'} />
                        <SidebarLink icon={FileText} label="Resume" href="/resume" onClick={close} active={page == 'resume'} />
                        <SidebarLink icon={Layers} label="Shelf" href="/blogs" onClick={close} active={page == 'blogs'} />
                    </nav>
                </div>
            </div>
        </>
    )
}

function SidebarLink({ icon: Icon, label, href, onClick, active }: {
    icon: any; label: string; href: string; onClick: () => void; active?: boolean;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${active ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                }`}
        >
            <Icon className="w-5 h-5 mr-3" />
            <span className="font-medium">{label}</span>
        </Link>
    )
}