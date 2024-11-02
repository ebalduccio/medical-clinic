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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-emerald-100">
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm p-6 hover:shadow-lg transition-all duration-300 border border-emerald-50"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 rounded-lg bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                                            <stat.icon className="w-6 h-6 text-emerald-600" />
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex flex-col">
                                                <span className="text-3xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors">
                                                    {stat.value}
                                                </span>
                                                <span className="text-sm font-medium text-emerald-600">
                                                    {stat.label}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
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