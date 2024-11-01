import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
    CreditCard,
    Percent,
    Clock,
    Users,
    Calendar,
    PiggyBank,
    Heart,
    Gift
} from "lucide-react"

export function BenefitsCardSection(): JSX.Element {
    const benefits = [
        {
            icon: <Percent className="w-6 h-6 text-emerald-600" />,
            title: "Descontos Exclusivos",
            description: "Até 30% em consultas e exames"
        },
        {
            icon: <Clock className="w-6 h-6 text-emerald-600" />,
            title: "Agendamento Prioritário",
            description: "Horários preferenciais"
        },
        {
            icon: <Users className="w-6 h-6 text-emerald-600" />,
            title: "Extensivo à Família",
            description: "Inclua até 4 dependentes"
        },
        {
            icon: <PiggyBank className="w-6 h-6 text-emerald-600" />,
            title: "Pagamento Facilitado",
            description: "Parcele seus procedimentos"
        }
    ]

    return (
        <section className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-white to-emerald-50">
            {/* Elementos decorativos */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply blur-xl opacity-70" />
                <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply blur-xl opacity-70" />
            </div>

            <div className="container px-4 md:px-6 relative">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Lado Esquerdo - Informações */}
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-emerald-100/60 backdrop-blur-sm">
                            <Gift className="w-5 h-5 text-emerald-600 mr-2" />
                            <span className="text-sm font-medium text-emerald-700">Benefícios Exclusivos</span>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                                    Cartão Saúde Plus
                                </span>
                            </h2>
                            <p className="text-lg text-emerald-700 max-w-[600px]">
                                Tenha acesso a benefícios exclusivos e descontos especiais em todos os nossos serviços com o Cartão Saúde Plus.
                                Cuidar da sua saúde nunca foi tão vantajoso.
                            </p>

                            {/* Grid de benefícios */}
                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="rounded-lg bg-emerald-100/50 p-2">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-emerald-900">{benefit.title}</h3>
                                            <p className="text-sm text-emerald-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Call to action */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <Button
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
                                >
                                    Solicitar Cartão
                                    <CreditCard className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-emerald-200 hover:bg-emerald-50 text-emerald-600 px-8 py-6 text-lg"
                                >
                                    Conhecer Planos
                                    <Heart className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Lado Direito - Cartão */}
                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-2xl -rotate-3 transform transition-transform hover:-rotate-6" />
                        <div className="relative aspect-[4/3] w-full max-w-[500px] mx-auto">
                            {/* Card Principal */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-2xl transform rotate-6 transition-transform hover:rotate-12">
                                <div className="absolute inset-0.5 bg-white/5 rounded-2xl backdrop-blur-sm">
                                    {/* Chip do cartão */}
                                    <div className="absolute top-8 left-8 w-12 h-8 bg-yellow-200/80 rounded-md" />

                                    {/* Logo */}
                                    <div className="absolute top-8 right-8">
                                        <Heart className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Número do cartão */}
                                    <div className="absolute bottom-20 left-8 right-8">
                                        <p className="text-white/80 tracking-widest text-lg font-mono">
                                            **** **** **** ****
                                        </p>
                                    </div>

                                    {/* Nome do cartão */}
                                    <div className="absolute bottom-8 left-8">
                                        <p className="text-white/90 font-semibold">SAÚDE PLUS</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card de Fundo (efeito) */}
                        </div>

                        {/* Elementos decorativos ao redor do cartão */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-200/30 rounded-full blur-xl" />
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-200/30 rounded-full blur-xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}