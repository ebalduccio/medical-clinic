import { Award, UserCheck, Building2, Heart, ShieldCheck } from "lucide-react"

export function WhyChooseUsSection(): JSX.Element {
    const benefits = [
        {
            icon: <UserCheck className="w-8 h-8 text-emerald-600" />,
            title: "Profissionais Especializados",
            description: "Equipe altamente qualificada com formação especializada em medicina orofacial"
        },
        {
            icon: <Building2 className="w-8 h-8 text-emerald-600" />,
            title: "Tecnologia Avançada",
            description: "Equipamentos de última geração e técnicas modernas para resultados superiores"
        },
        {
            icon: <Heart className="w-8 h-8 text-emerald-600" />,
            title: "Atendimento Personalizado",
            description: "Tratamento individualizado com foco nas suas necessidades e objetivos"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
            title: "Excelência Comprovada",
            description: "Anos de experiência e milhares de sorrisos transformados com sucesso"
        }
    ]

    return (
        <section className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
            {/* Elementos decorativos */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            </div>

            <div className="container px-4 md:px-6 relative">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Conteúdo Principal */}
                    <div className="flex-1 space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-emerald-100/60 backdrop-blur-sm">
                            <Award className="w-5 h-5 text-emerald-600 mr-2" />
                            <span className="text-sm font-medium text-emerald-700">Referência em Odontologia</span>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                                    Por que escolher a Amodonto?
                                </span>
                            </h2>
                            <p className="max-w-[600px] text-lg text-emerald-700 md:text-xl/relaxed">
                                Na Amodonto, combinamos expertise profissional, tecnologia de ponta e atendimento humanizado
                                para proporcionar os melhores tratamentos odontológicos. Nossa missão é transformar sorrisos
                                e vidas com excelência e dedicação.
                            </p>
                        </div>
                    </div>

                    {/* Cards de Benefícios */}
                    <div className="flex-1">
                        <div className="grid gap-6 sm:grid-cols-2">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="group relative p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-emerald-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                                >
                                    {/* Círculo decorativo */}
                                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-50 to-teal-50 opacity-40 group-hover:opacity-60 transition-opacity" />

                                    <div className="relative space-y-4">
                                        <div className="inline-flex p-3 rounded-xl bg-emerald-100/50">
                                            {benefit.icon}
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold text-emerald-900">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-emerald-600">
                                                {benefit.description}
                                            </p>
                                        </div>
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