'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, X } from "lucide-react"

export function Header(): JSX.Element {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const navigation = [
        { name: "Início", href: "#" },
        { name: "Serviços", href: "#" },
        { name: "Profissionais", href: "#" },
        { name: "Sobre", href: "#" },
        { name: "Contato", href: "#" },
    ]

    return (
        <>
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
                                    alt="Amodonto Logo"
                                    className="h-10 w-10 object-cover transition-transform opacity-60 group-hover:scale-110"
                                    height={40}
                                    width={40}
                                />
                            </div>
                            <div className="ml-3 flex flex-col">
                                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                                    Amodonto
                                </span>
                                <span className="text-xs text-emerald-600 font-medium">Medicina Orofacial</span>
                            </div>
                        </Link>

                        {/* Main Navigation */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navigation.map((item) => (
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
                                (71) 99922-0044
                            </Button>
                            <Button
                                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200"
                            >
                                Agendar Avaliação
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 md:hidden"
                            onClick={toggleMobileMenu}
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6 text-emerald-600" />
                            ) : (
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
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`absolute top-full left-0 right-0 bg-white md:hidden transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-2 opacity-0 invisible"
                        }`}
                >
                    <div className="container mx-auto">
                        <div className="divide-y divide-gray-100">
                            <nav className="py-6 px-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block py-3 text-base font-medium text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-lg px-4 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="py-6 px-4 space-y-3">
                                <Button
                                    variant="ghost"
                                    className="w-full justify-center text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                                >
                                    <Phone className="h-4 w-4 mr-2" />
                                    (71) 99922-0044
                                </Button>
                                <Button
                                    className="w-full justify-center bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200"
                                >
                                    Agendar Avaliação
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    )
}

export default Header