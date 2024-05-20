import { IconArrowDown } from "@tabler/icons-react"
import ListStacks from "./ListStacks";

interface BannerProps {
    className?: string
}
export default function Banner(props: BannerProps) {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
            window.scrollTo({
                top: projectsSection.offsetTop - 100,
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="home" className={props.className}>
            <div className="space-y-5 mt-24 py-2 sm:mt-0">
                <h1 className="text-6xl font-black sm:text-9xl">Marlisson Silva</h1>
                <h2 className="text-3xl sm:text-5xl">Desenvolvedor Web</h2>
                <p className="text-xl font-light max-w-[600px] sm:text-2xl">
                    Cursando análise e desnvolvimento de sistemas e me especializando com a Formação.Dev na Cod3rcursos.
                </p>
                <div className="flex justify-center sm:justify-start">
                    <ListStacks />
                </div>
            </div>
            <button className="animate-bounce w-10 h-10 btn rounded-full mt-10 sm:mt-20"
                onClick={scrollToProjects}>
                <span className="uppercase text-sm flex flex-col items-center gap-1"><IconArrowDown /></span>
            </button>
        </section>
    )
}