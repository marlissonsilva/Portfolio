import Image from "next/image";
import { certificates } from "@/data/certificates";
import { IconX } from "@tabler/icons-react";

interface ViewProps {
    className: string
    onClick: () => void
}
export default function View(props: ViewProps) {
    return (
        <section className={`fixed inset-0 h-screen w-full z-20 ${props.className ? props.className : ""}`}>

            <div className="flex justify-center items-center backdrop-blur-3xl h-full w-full ">
                <button className="absolute top-10 custom-shadow rounded-full
                bg-white dark:bg-zinc-800"
                    onClick={props.onClick}>
                    <IconX size={40} />
                </button>
                {/*TODO: Mudar tamnaho(width) de acrodo com tamanho da tela*/}
                <Image src={certificates[0].image} alt="" width={500} height={500} className="w-[900px]" />
            </div>
        </section>
    )
}