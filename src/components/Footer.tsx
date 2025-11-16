import { EMAIL } from "@/content/stats/info";

export default function Footer() {
    return (
        <footer className="bg-white border-t mt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-8 py-4">
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">© 2025 Surendra Kumar. All rights reserved.</p>
                    <div className="hidden md:flex space-x-6">
                        <a href="https://www.linkedin.com/in/skvg" className="text-gray-600 hover:text-red-500 transition">LinkedIn</a>
                        <a href="https://github.com/skvg" className="text-gray-600 hover:text-red-500 transition">GitHub</a>
                        <a href={`mailto:${EMAIL}`} className="text-gray-600 hover:text-red-500 transition">Email</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}