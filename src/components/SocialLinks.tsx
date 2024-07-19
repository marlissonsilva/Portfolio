import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

interface SocialProps {
  className?: string;
}
export default function Social(props: SocialProps) {
  return (
    <div className={props.className}>
      <div className="flex gap-4">
        <a
          href="https://github.com/marlissonsilva"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <IconBrandGithub size={30} stroke={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/in/marlisson-silva-b6a187302/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <IconBrandLinkedin size={30} stroke={1.5} />
        </a>
      </div>
    </div>
  );
}
