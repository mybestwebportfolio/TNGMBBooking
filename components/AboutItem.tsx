import { IconType } from "react-icons"

interface AboutItemProps {
    icon: IconType,
    title: string,
    description: string
}

const AboutItem = ({ icon: Icon, title, description }: AboutItemProps) => {
    return (
        <div className="flex flex-col gap-y-4 max-w-md">
            <Icon size={34} className="text-blue-800" />
            <h1 className="text-black text-2xl font-semibold">{title}</h1>
            <p className="text-sm text-neutral-900/90">{description}</p>
        </div>
    )
}

export default AboutItem