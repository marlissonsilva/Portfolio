import {
  IconBrandCss3,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandSass,
  IconBrandTailwind,
} from '@tabler/icons-react';
import Stack from './Stack';
import useWidthWindow from '@/hooks/useWidthWindow';

interface ListStacksProps {
  className?: string;
}

export default function ListStacks(props: ListStacksProps) {
  const widthWindow = useWidthWindow();
  function sizeIcons() {
    if (widthWindow === 'xs' || widthWindow === 'sm') {
      return 50;
    }
    return 70;
  }

  return (
    <div
      className={`container  
        flex flex-wrap
        gap-9  p-2 mt-4 sm:h-24 w-fit `}
    >
      <Stack
        icon={<IconBrandReact size={sizeIcons()} stroke={1.2} />}
        title="react"
      />
      <Stack
        icon={<IconBrandNextjs size={sizeIcons()} stroke={1.2} />}
        title="next"
      />
      <Stack
        icon={<IconBrandTailwind size={sizeIcons()} stroke={1.2} />}
        title="tailwind"
      />
      <Stack
        icon={<IconBrandJavascript size={sizeIcons()} stroke={1.2} />}
        title="javascrip"
      />
      <Stack
        icon={<IconBrandNodejs size={sizeIcons()} stroke={1.2} />}
        title="node"
      />
      <Stack
        icon={<IconBrandGit size={sizeIcons()} stroke={1.2} />}
        title="git"
      />
    </div>
  );
}
