import { Calendar, Clock, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactInfo(): JSX.Element {
    return (
        <>
            <div className="flex items-center space-x-2">
                <MapPin className="text-blue-500" />
                <span>123 Medical Drive, Healthville, HV 12345</span>
            </div>
            <div className="flex items-center space-x-2">
                <Phone className="text-blue-500" />
                <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
                <Clock className="text-blue-500" />
                <span>Mon-Fri: 8am-8pm, Sat-Sun: 9am-5pm</span>
            </div>
            <div className="flex items-center space-x-2">
                <Calendar className="text-blue-500" />
                <Button variant="outline">Book an Appointment</Button>
            </div>
        </>
    )
}