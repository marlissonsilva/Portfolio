import { cards } from '@/data/cards';
import Card from './Card';
import TitleSection from './TitleSection';

interface ProjectsProps {
  className?: string;
}
export default function Projects(props: ProjectsProps) {
  return (
    <section id="projects-section" className={props.className}>
      <TitleSection title="projetos" />
      <div className="flex flex-wrap justify-around items-center gap-16 h-full py-6">
        {cards.map((card, index) => (
          <Card data={card} key={index} />
        ))}
      </div>
    </section>
  );
}
