import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo"
import { MessageSquare, MapPin } from "lucide-react"

export function ContactSection(): JSX.Element {
    const LocationMap = () => {
        return (
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-emerald-100">
                {/* Overlay superior com gradiente */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-emerald-50 to-transparent z-10" />

                {/* Indicador de localização fixo */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-sm py-2 px-3 rounded-full shadow-md">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-900">Amodonto</span>
                </div>

                {/* Iframe do Google Maps */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8282394509477!2d-38.45699542394614!3d-12.981733059826095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b19f0e40af7%3A0x84f5c3e31a1f5a7!2sR.%20Alceu%20Amoroso%20Lima%2C%20805%20-%20Caminho%20das%20%C3%81rvores%2C%20Salvador%20-%20BA%2C%2041820-770!5e0!3m2!1spt-BR!2sbr!4v1707957542612!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                />

                {/* Overlay inferior com gradiente */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-emerald-50 to-transparent z-10" />
            </div>
        )
    }

    return (
        <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
            {/* Elementos decorativos de background */}
            <div className="absolute inset-0">
                <div className="absolute w-[500px] h-[500px] top-0 left-0">
                    <div className="w-full h-full bg-emerald-100/30 blur-[128px] rounded-full" />
                </div>
                <div className="absolute w-[500px] h-[500px] bottom-0 right-0">
                    <div className="w-full h-full bg-teal-100/30 blur-[128px] rounded-full" />
                </div>
            </div>

            <div className="container px-4 md:px-6 relative">
                {/* Header da seção */}
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-emerald-100/60 backdrop-blur-sm">
                        <MessageSquare className="w-5 h-5 text-emerald-600 mr-2" />
                        <span className="text-sm font-medium text-emerald-700">Entre em Contato</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                            Agende sua Consulta
                        </span>
                    </h2>
                    <p className="text-lg text-emerald-700 max-w-[600px] mx-auto">
                        Estamos prontos para transformar seu sorriso. Entre em contato e marque sua avaliação.
                    </p>
                </div>

                {/* Grid de informações rápidas */}
                {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-emerald-100 hover:bg-white/80 transition-colors">
                        <div className="rounded-full p-3 bg-emerald-100">
                            <Phone className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-emerald-900">Telefone</h3>
                            <p className="text-emerald-600">(71) 99922-0044</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-emerald-100 hover:bg-white/80 transition-colors">
                        <div className="rounded-full p-3 bg-emerald-100">
                            <MapPin className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-emerald-900">Endereço</h3>
                            <p className="text-emerald-600">Caminho das Árvores - Salvador</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-emerald-100 hover:bg-white/80 transition-colors sm:col-span-2 lg:col-span-1">
                        <div className="rounded-full p-3 bg-emerald-100">
                            <Clock className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-emerald-900">Horário</h3>
                            <p className="text-emerald-600">Seg-Sex: 9h às 18h</p>
                        </div>
                    </div>
                </div> */}

                {/* Container principal de contato */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-8 items-start">
                        {/* Coluna de Informações - 2/5 */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100 shadow-lg">
                                <ContactInfo />
                            </div>

                            {/* Mapa */}
                            <div className="mb-12 h-[400px] rounded-2xl overflow-hidden shadow-lg">
                                <LocationMap />
                            </div>
                        </div>

                        {/* Coluna do Formulário - 3/5 */}
                        <div className="lg:col-span-3 bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100 shadow-lg">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-emerald-900">
                                    Marque sua Avaliação
                                </h3>
                                <p className="text-emerald-600">
                                    Preencha o formulário abaixo e nossa equipe entrará em contato para agendar sua consulta.
                                </p>
                            </div>
                            <div className="mt-8">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}