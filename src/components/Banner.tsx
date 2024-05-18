import { IconArrowDown, IconArrowRight } from "@tabler/icons-react"
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
            <div className="space-y-5">
                <h1 className="text-6xl font-black sm:text-9xl">Marlisson Silva</h1>
                <h2 className="text-3xl sm:text-5xl">Desenvolvedor Web</h2>
                <p className="text-xl font-light max-w-[600px] sm:text-2xl">Desenvolvendo sonhos e criando soluções digitais. Em busca de desafios para transformar ideias em realidade.</p>
                <ListStacks />
            </div>
            <button className="animate-bounce btn absolute bottom-2 right-3 sm:bottom-16"
                onClick={scrollToProjects}>
                <span className="uppercase text-sm flex flex-col items-center gap-1"> Projetos<IconArrowDown /></span>
            </button>
        </section>
    )
}