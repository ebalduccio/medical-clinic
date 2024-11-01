import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Phone, ChevronRight, Clock, MapPin, Users } from "lucide-react";

function HeroSection() {
    const stats = [
        { icon: Users, label: "Pacientes Atendidos", value: "10,000+" },
        { icon: Clock, label: "Anos de Experiência", value: "25+" },
        { icon: MapPin, label: "Localidades", value: "3" }
    ];

    return (
        <section className="relative w-full overflow-hidden">
            {/* Background Image with Next.js Image component */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/hero.jpg"
                    alt="Medical background"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            {/* Overlay para garantir legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/95 to-transparent -z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/50 to-emerald-50/95 -z-10" />

            <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="flex flex-col space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-emerald-50/80 backdrop-blur-sm rounded-full px-4 py-1.5 w-fit">
                            <Heart className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-medium text-emerald-600">Cuidando da sua saúde</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                                Transformando Vidas com Cuidados de Excelência
                            </h1>
                            <p className="max-w-[600px] text-emerald-800 md:text-xl backdrop-blur-sm bg-white/30 rounded-lg p-4">
                                Combinamos tecnologia avançada e atendimento humanizado para oferecer o melhor cuidado para você e sua família.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="group bg-emerald-600 hover:bg-emerald-700 text-lg h-12 px-6">
                                Agende sua Consulta
                                <Calendar className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                            </Button>
                            <Button variant="outline" className="group border-emerald-200 hover:bg-emerald-50 text-emerald-600 text-lg h-12 px-6 bg-white/80 backdrop-blur-sm">
                                Fale Conosco
                                <Phone className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-emerald-100">
                            {stats.map((stat) => (
                                <div key={stat.label} className="space-y-2 bg-white/60 backdrop-blur-sm rounded-lg p-4">
                                    <div className="flex items-center space-x-2">
                                        <stat.icon className="w-5 h-5 text-emerald-600" />
                                        <span className="text-2xl font-bold text-emerald-900">{stat.value}</span>
                                    </div>
                                    <p className="text-sm text-emerald-600">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right content - Feature cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                title: "Atendimento 24/7",
                                description: "Suporte médico disponível a qualquer momento para emergências",
                                icon: Clock,
                                color: "bg-emerald-50/80",
                                iconColor: "text-emerald-600"
                            },
                            {
                                title: "Especialistas Renomados",
                                description: "Equipe médica altamente qualificada e experiente",
                                icon: Users,
                                color: "bg-teal-50/80",
                                iconColor: "text-teal-600"
                            },
                            {
                                title: "Tecnologia Avançada",
                                description: "Equipamentos de última geração para diagnósticos precisos",
                                icon: ChevronRight,
                                color: "bg-green-50/80",
                                iconColor: "text-green-600"
                            },
                            {
                                title: "Localização Privilegiada",
                                description: "Fácil acesso com estacionamento gratuito",
                                icon: MapPin,
                                color: "bg-emerald-50/80",
                                iconColor: "text-emerald-600"
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className={`${feature.color} backdrop-blur-sm p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer`}
                            >
                                <feature.icon className={`w-8 h-8 ${feature.iconColor} mb-4`} />
                                <h3 className="font-semibold text-lg mb-2 text-emerald-900">{feature.title}</h3>
                                <p className="text-emerald-700 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;