import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header(): JSX.Element {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="container mx-auto">
                <div className="px-4 lg:px-6 h-20 flex items-center justify-between">
                    {/* Logo and Brand */}
                    <Link
                        className="flex items-center justify-center group transition-transform hover:scale-105"
                        href="#"
                    >
                        <div className="relative h-10 w-10 bg-emerald-100 rounded-lg overflow-hidden">
                            <Image
                                src="/logo.png"
                                alt="HealthCare Clinic Logo"
                                className="h-10 w-10 object-cover transition-transform opacity-60 group-hover:scale-110"
                                height={40}
                                width={40}
                            />
                        </div>
                        <div className="ml-3 flex flex-col">
                            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                                HealthCare Clinic
                            </span>
                            <span className="text-xs text-emerald-600 font-medium">Cuidando de você</span>
                        </div>
                    </Link>

                    {/* Main Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {[
                            { name: "Início", href: "#" },
                            { name: "Serviços", href: "#" },
                            { name: "Médicos", href: "#" },
                            { name: "Sobre", href: "#" },
                            { name: "Contato", href: "#" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative px-3 py-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 transition-colors group"
                            >
                                {item.name}
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            variant="ghost"
                            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                        >
                            <Phone className="h-4 w-4 mr-2" />
                            (11) 9999-9999
                        </Button>
                        <Button
                            className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200"
                        >
                            Agendar Consulta
                        </Button>
                    </div>

                    {/* Mobile Menu Button - You'll need to implement the mobile menu functionality */}
                    <button className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 md:hidden">
                        <svg
                            className="h-6 w-6 text-emerald-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}