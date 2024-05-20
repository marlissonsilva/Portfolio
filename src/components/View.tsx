import Image from "next/image";
import { IconX } from "@tabler/icons-react";
import useWidthWindow from "@/hooks/useWidthWindow"

interface ViewProps {
    className: string
    onClick: () => void
    url: string
}
export default function View(props: ViewProps) {
    const widthWindow = useWidthWindow()
    function width() {
        if (widthWindow === 'xs' || widthWindow === 'sm') {
            return 500
        }
        return 900
    }
    return (
        <section className={`fixed inset-0 h-screen w-full z-20 ${props.className ? props.className : ""}`}>

            <div className="flex justify-center items-center backdrop-blur-3xl h-full w-full">
                <div className="flex flex-col gap-5">
                    <button className="self-center
                    custom-shadow rounded-full
                bg-white dark:bg-zinc-800"
                        onClick={props.onClick}>
                        <IconX size={40} />
                    </button>
                    <Image src={props.url} alt="" width={width()} height={500} className="" />
                </div>

            </div>
        </section>
    )
}