import { ServiceProps } from "@/types"
import {
    Heart,
    Brain,
    Baby,
    Bone,
    Microscope,
    Stethoscope,
    Activity,
    Syringe
} from "lucide-react"
import Image from "next/image"

export function ServicesSection(): JSX.Element {
    const services: ServiceProps[] = [
        {
            icon: <Heart className="w-8 h-8 text-emerald-600" />,
            title: "Clínica Geral",
            description: "Atendimento completo para toda a família com profissionais especializados.",
            features: ["Consultas de rotina", "Check-up completo", "Prevenção de doenças"]
        },
        {
            icon: <Brain className="w-8 h-8 text-emerald-600" />,
            title: "Neurologia",
            description: "Diagnóstico e tratamento especializado para condições neurológicas.",
            features: ["Avaliação cognitiva", "Tratamento de enxaqueca", "Distúrbios do sono"]
        },
        {
            icon: <Baby className="w-8 h-8 text-emerald-600" />,
            title: "Pediatria",
            description: "Cuidados especializados para a saúde e desenvolvimento das crianças.",
            features: ["Acompanhamento do crescimento", "Vacinação", "Orientação nutricional"]
        },
        {
            icon: <Bone className="w-8 h-8 text-emerald-600" />,
            title: "Ortopedia",
            description: "Tratamento especializado para problemas musculoesqueléticos.",
            features: ["Fisioterapia", "Reabilitação", "Tratamento de lesões"]
        },
        {
            icon: <Microscope className="w-8 h-8 text-emerald-600" />,
            title: "Exames",
            description: "Laboratório completo com resultados rápidos e precisos.",
            features: ["Exames de sangue", "Diagnóstico por imagem", "Testes especializados"]
        },
        {
            icon: <Stethoscope className="w-8 h-8 text-emerald-600" />,
            title: "Cardiologia",
            description: "Avaliação e tratamento completo para saúde cardíaca.",
            features: ["Eletrocardiograma", "Holter", "Check-up cardíaco"]
        },
        {
            icon: <Activity className="w-8 h-8 text-emerald-600" />,
            title: "Emergência",
            description: "Atendimento de urgência 24 horas com equipe especializada.",
            features: ["Pronto atendimento", "UTI móvel", "Emergências"]
        },
        {
            icon: <Syringe className="w-8 h-8 text-emerald-600" />,
            title: "Farmácia",
            description: "Medicamentos e produtos de saúde com orientação farmacêutica.",
            features: ["Medicamentos", "Produtos de saúde", "Orientação especializada"]
        }
    ]

    // Rest of the component remains the same
    return (
        <section className="relative w-full min-h-screen flex flex-col lg:flex-row">
            {/* Imagem de fundo cobrindo metade da tela */}
            <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto lg:sticky lg:top-0">
                <Image
                    src="/services.jpg" // Uma imagem moderna de ambiente médico
                    alt="Ambiente médico moderno"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-emerald-900/40" />
            </div>

            {/* Conteúdo dos serviços */}
            <div className="w-full lg:w-1/2 lg:ml-auto bg-white">
                <div className="px-4 md:px-12 py-16 md:py-24">
                    <div className="max-w-2xl mx-auto">
                        <div className="space-y-4 mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                                Nossos Serviços
                            </h2>
                            <p className="text-lg text-emerald-700">
                                Oferecemos uma ampla gama de serviços médicos com profissionais altamente qualificados
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