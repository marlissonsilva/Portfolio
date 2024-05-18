import Image from "next/image"
import Card from "./Card"
import { certificates } from "@/data/certificates"
import TitleSection from "./TitleSection"
import { IconArrowUp } from "@tabler/icons-react"
import View from "./View"
import useToggle from "@/hooks/useToogle"

interface CertificateProps {
    className?: string
}
export default function Certificate(props: CertificateProps) {
    const [modal, setModal] = useToggle(false)

    function handleShowCertificate(e: any) {
        document.body.style.overflow = 'hidden'
        setModal()
    }

    function handleHiddenModal() {
        setModal()
        document.body.style.overflow = 'auto'
    }

    return (
        <section id="certificate" className={props.className}>
            <TitleSection title="certificados" className="mt-16" />
            <div className="flex flex-wrap justify-around items-center gap-16 h-full py-6 pb-20 ">
                {certificates.map((certificate, index) => (
                    <div key={index} >
                        <Image src={certificate.image} alt={certificate.title} width={430} height={200} onClick={handleShowCertificate} />
                    </div>
                ))}
            </div>
            <View className={modal ? "inline" : "hidden"} onClick={handleHiddenModal} />
        </section>
    )
}