import Link from "next/link"
import Image from "next/image"
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Phone,
    Mail,
    MapPin,
    ArrowUp
} from "lucide-react"

export function Footer(): JSX.Element {
    return (
        <footer className="w-full bg-gradient-to-b from-white to-emerald-50">
            {/* Seção principal do footer */}
            <div className="container px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Coluna 1 - Sobre */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="relative h-10 w-10 bg-emerald-100 rounded-lg overflow-hidden">
                                <Image
                                    src="/logo.png"
                                    alt="HealthCare Clinic Logo"
                                    className="h-10 w-10 object-cover transition-transform opacity-60 group-hover:scale-110"
                                    height={40}
                                    width={40}
                                />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                                HealthCare
                            </span>
                        </Link>
                        <p className="text-emerald-700 text-sm">
                            Fornecendo cuidados de saúde excepcionais com compaixão e excelência desde 1995.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-emerald-600 hover:text-emerald-700">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-emerald-600 hover:text-emerald-700">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-emerald-600 hover:text-emerald-700">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-emerald-600 hover:text-emerald-700">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Coluna 2 - Links Rápidos */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-emerald-900">Links Rápidos</h3>
                        <ul className="space-y-3">
                            {['Sobre Nós', 'Nossos Serviços', 'Especialidades', 'Agendamento', 'Blog'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna 3 - Serviços */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-emerald-900">Serviços</h3>
                        <ul className="space-y-3">
                            {['Clínica Geral', 'Pediatria', 'Cardiologia', 'Ortopedia', 'Exames'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna 4 - Contato */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-emerald-900">Contato</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-sm text-emerald-600">
                                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                                <span>Rua da Saúde, 123<br />São Paulo, SP - 00000-000</span>
                            </li>
                            <li className="flex items-center space-x-3 text-sm text-emerald-600">
                                <Phone className="w-5 h-5" />
                                <span>(11) 9999-9999</span>
                            </li>
                            <li className="flex items-center space-x-3 text-sm text-emerald-600">
                                <Mail className="w-5 h-5" />
                                <span>contato@healthcare.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Barra inferior */}
            <div className="border-t border-emerald-100">
                <div className="container px-4 md:px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-emerald-600">
                            © 2024 HealthCare Clinic. Todos os direitos reservados.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link className="text-sm text-emerald-600 hover:text-emerald-700" href="#">
                                Termos de Uso
                            </Link>
                            <Link className="text-sm text-emerald-600 hover:text-emerald-700" href="#">
                                Privacidade
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}