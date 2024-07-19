import { useState } from 'react';
import { setTimeout } from 'timers';

interface StackProps {
  icon: any;
  title: string;
  className?: string;
}

export default function Stack(props: StackProps) {
  const [visible, setVisible] = useState(false);
  const { icon, title, className } = props;

  function handleShowName() {
    setVisible(true);
  }

  return (
    <div
      className={`flex flex-col items-center 
        ${visible ? 'text-blue-500' : ''}`}
      onMouseEnter={handleShowName}
    >
      {icon}
      <span
        className={`${visible ? 'inline ' : 'hidden'} 
            uppercase text-xs text-black dark:text-white`}
      >
        {title}
      </span>
    </div>
  );
}
