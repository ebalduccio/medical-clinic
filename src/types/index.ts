export interface ServiceProps {
    icon: React.ReactNode
    title: string
    description: string
    features: string[];
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    subject: string;
}