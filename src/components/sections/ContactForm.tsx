'use client'

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ContactFormData } from "@/types"
import { Send, Loader2, AlertTriangle } from "lucide-react"

export function ContactForm(): JSX.Element {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState<string>("")

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')
        setErrorMessage("")

        try {
            // Simulate API call
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simulando um erro aleatório para teste
                    if (Math.random() > 0.5) {
                        reject(new Error("Falha na conexão com o servidor"))
                    }
                    resolve(true)
                }, 2000)
            })

            setSubmitStatus('success')
            // Reset form after success
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                subject: ""
            })
        } catch (error: unknown) {
            setSubmitStatus('error')
            if (error instanceof Error) {
                setErrorMessage(error.message)
            } else {
                setErrorMessage("Ocorreu um erro inesperado. Tente novamente mais tarde.")
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="space-y-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Grid para inputs curtos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-emerald-900">
                            Nome Completo
                        </label>
                        <Input
                            placeholder="Digite seu nome"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="border-emerald-100 focus-visible:ring-emerald-500 bg-white/70 backdrop-blur-sm"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-emerald-900">
                            E-mail
                        </label>
                        <Input
                            placeholder="seu@email.com"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="border-emerald-100 focus-visible:ring-emerald-500 bg-white/70 backdrop-blur-sm"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-emerald-900">
                            Telefone
                        </label>
                        <Input
                            placeholder="(00) 00000-0000"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            className="border-emerald-100 focus-visible:ring-emerald-500 bg-white/70 backdrop-blur-sm"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-emerald-900">
                            Assunto
                        </label>
                        <Input
                            placeholder="Motivo do contato"
                            value={formData.subject}
                            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                            className="border-emerald-100 focus-visible:ring-emerald-500 bg-white/70 backdrop-blur-sm"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-emerald-900">
                        Mensagem
                    </label>
                    <textarea
                        className="min-h-[120px] w-full rounded-lg border border-emerald-100 bg-white/70 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Digite sua mensagem aqui..."
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        required
                    />
                </div>

                {/* Status messages */}
                {submitStatus === 'success' && (
                    <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg text-sm flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2" />
                        Mensagem enviada com sucesso! Retornaremos em breve.
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="bg-red-50 text-red-700 px-4 py-2 rounded-lg text-sm flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        {errorMessage || "Erro ao enviar mensagem. Por favor, tente novamente."}
                    </div>
                )}

                {/* Submit button */}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4 mr-2" />
                            Enviar Mensagem
                        </>
                    )}
                </Button>
            </form>

            {/* Privacy note */}
            <p className="text-sm text-emerald-600 text-center">
                Ao enviar este formulário, você concorda com nossa{' '}
                <a href="#" className="underline hover:text-emerald-700">
                    política de privacidade
                </a>
            </p>
        </div>
    )
}