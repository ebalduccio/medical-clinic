import { ServiceProps } from "@/types"

export function ServiceCard({ icon, title, description }: ServiceProps): JSX.Element {
  return (
    <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
      <div className="p-2 bg-blue-100 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500 text-center">{description}</p>
    </div>
  )
}