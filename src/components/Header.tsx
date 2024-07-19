import { IconMoonStars, IconSun } from '@tabler/icons-react';
import Social from './SocialLinks';

interface HeaderProps {
  className?: string;
  onClick: () => void;
  theme: string;
}
export default function Header(props: HeaderProps) {
  return (
    <header className={props.className}>
      <div className="wrapper flex justify-between p-6">
        <Social />
        <button className="hover" onClick={props.onClick}>
          {props.theme === 'dark' ? (
            <IconSun size={30} stroke={1.5} />
          ) : (
            <IconMoonStars size={30} stroke={1.5} />
          )}
        </button>
      </div>
    </header>
  );
}
