import Social from './SocialLinks';

interface FooterProps {
  className?: string;
}
export default function Footer(props: FooterProps) {
  return (
    <footer className="flex flex-col items-center gap-4 py-4 bg-zinc-200 dark:bg-zinc-900">
      <p>© 2023. Todos os diretitos reservados</p>
      <Social className="" />
    </footer>
  );
}
