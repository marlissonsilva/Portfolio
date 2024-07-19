import { IconCode, IconLink } from '@tabler/icons-react';
import Image from 'next/image';

interface CardProps {
  data: {
    title: string;
    description: string;
    image: string;
    code: string;
    deploy: string;
    icons: any[];
  };
  className?: string;
}

export default function Card(props: CardProps) {
  const { image, title, icons, deploy, code } = props.data;
  return (
    <div className="custom-shadow  p-2 rounded-lg">
      <div className="flex items-center justify-between px-2">
        <h4 className="text-left p-2 text-xl font-medium">{title}</h4>
        <div className="flex gap-5 items-center">
          <a
            href={code}
            target="_blank"
            title="Ver código"
            className={`rounded-full custom-shadow  
                        ${
                          code
                            ? 'hover '
                            : 'p-1 pointer-events-none text-zinc-500'
                        }`}
          >
            <IconCode />
          </a>
          <a
            href={deploy}
            target="_blank"
            title="Ver site"
            className="rounded-full hover custom-shadow "
          >
            <IconLink />
          </a>
        </div>
      </div>
      <Image src={image} alt={title} width={430} height={200} className="p-2" />
      <div className="flex justify-start p-2 gap-4">
        {icons.map((icon) => (
          <span key={icon.key}>{icon}</span>
        ))}
      </div>
    </div>
  );
}
