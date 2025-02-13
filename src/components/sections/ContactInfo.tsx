import { Calendar, Clock, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactInfo(): JSX.Element {
    const contactItems = [
        {
            icon: <MapPin className="w-5 h-5 text-emerald-600" />,
            title: "Nosso Endereço",
            content: "Rua Alceu Amoroso Lima 805A Loja 04",
            details: "Centro Médico Iguatemi - Caminho das Árvores - Salvador/BA"
        },
        {
            icon: <Phone className="w-5 h-5 text-emerald-600" />,
            title: "Telefone Principal",
            content: "(71) 99922-0044",
            details: "WhatsApp e ligações"
        },
        {
            icon: <Mail className="w-5 h-5 text-emerald-600" />,
            title: "E-mail",
            content: "contato@amodonto.com.br",
            details: "Resposta em até 24h"
        },
        {
            icon: <Clock className="w-5 h-5 text-emerald-600" />,
            title: "Horário de Atendimento",
            content: "Segunda à Sexta: 9h às 18h",
            details: "Sábado: 9h às 13h"
        }
    ]

    return (
        <div className="space-y-6">
            {/* Lista de contatos */}
            <div className="space-y-5">
                {contactItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex gap-3 items-start"
                    >
                        <div className="rounded-full p-2 bg-emerald-100/50">
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-emerald-800">
                                {item.title}
                            </p>
                            <p className="text-emerald-900 font-medium">
                                {item.content}
                            </p>
                            <p className="text-sm text-emerald-600">
                                {item.details}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botão de agendamento */}
            <div className="pt-2">
                <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Consulta
                </Button>
            </div>

            {/* Aviso de atendimento emergencial */}
            <div className="bg-emerald-50/50 backdrop-blur-sm rounded-lg p-4 border border-emerald-100">
                <div className="flex items-start gap-3">
                    <div className="rounded-full p-2 bg-emerald-100/50">
                        <Phone className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                        <p className="font-medium text-emerald-800">
                            Atendimento Prioritário
                        </p>
                        <p className="text-emerald-900 font-medium">
                            (71) 98888-8888
                        </p>
                        <p className="text-sm text-emerald-600">
                            Para emergências odontológicas
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}