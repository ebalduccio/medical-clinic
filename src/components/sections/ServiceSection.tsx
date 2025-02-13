import { ServiceProps } from "@/types"
import {
    Star,
    Smile,
    Sparkles,
    ShieldCheck,
    Lamp,
    Heart
} from "lucide-react"
import Image from "next/image"

export function ServicesSection(): JSX.Element {
    const services: ServiceProps[] = [
        {
            icon: <Star className="w-8 h-8 text-emerald-600" />,
            title: "Implante",
            description: "Recupere sua confiança e sorriso com implantes dentários duradouros e naturais.",
            features: ["Implantes unitários", "Implantes múltiplos", "Prótese sobre implante"]
        },
        {
            icon: <Smile className="w-8 h-8 text-emerald-600" />,
            title: "Invisalign e Alinhadores",
            description: "Alinhe seus dentes de forma discreta e eficiente com tecnologia de ponta.",
            features: ["Invisalign", "Alinhadores transparentes", "Correção ortodôntica"]
        },
        {
            icon: <Sparkles className="w-8 h-8 text-emerald-600" />,
            title: "Harmonização Orofacial",
            description: "Transforme seu sorriso e realce sua beleza natural com procedimentos personalizados.",
            features: ["Preenchimento labial", "Toxina botulínica", "Design do sorriso"]
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
            title: "Prevenção",
            description: "Mantenha sua saúde bucal em dia com cuidados preventivos especializados.",
            features: ["Limpeza profissional", "Avaliação periodontal", "Orientação de higiene"]
        },
        {
            icon: <Lamp className="w-8 h-8 text-emerald-600" />,
            title: "Lentes de Contato",
            description: "Transforme seu sorriso com lentes de contato dentais personalizadas e naturais.",
            features: ["Facetas em porcelana", "Design digital", "Clareamento dental"]
        },
        {
            icon: <Heart className="w-8 h-8 text-emerald-600" />,
            title: "Tratamento de Canal",
            description: "Tratamento especializado para eliminar a dor e preservar seus dentes naturais.",
            features: ["Endodontia moderna", "Tratamento sem dor", "Recuperação dental"]
        }
    ]

    return (
        <section className="relative w-full min-h-screen flex flex-col lg:flex-row">
            <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto lg:sticky lg:top-0">
                <Image
                    src="/services.jpg"
                    alt="Consultório odontológico moderno"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-emerald-900/40" />
            </div>

            <div className="w-full lg:w-1/2 lg:ml-auto bg-white">
                <div className="px-4 md:px-12 py-16 md:py-24">
                    <div className="max-w-2xl mx-auto">
                        <div className="space-y-4 mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                                Nossos Serviços
                            </h2>
                            <p className="text-lg text-emerald-700">
                                Oferecemos tratamentos odontológicos avançados com profissionais especializados para transformar seu sorriso
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 border border-emerald-100"
                                >
                                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-emerald-50 transition-all group-hover:bg-emerald-100" />

                                    <div className="relative space-y-4">
                                        <div className="inline-block rounded-xl bg-emerald-100/80 p-3">
                                            {service.icon}
                                        </div>

                                        <h3 className="text-xl font-bold text-emerald-900">
                                            {service.title}
                                        </h3>

                                        <p className="text-emerald-600">
                                            {service.description}
                                        </p>

                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-sm text-emerald-700">
                                                    <svg
                                                        className="mr-2 h-4 w-4 text-emerald-500"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}