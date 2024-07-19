import {
  IconApi,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
} from '@tabler/icons-react';

interface IconProps {
  Component: React.ComponentType<any>;
  restProps?: any;
}

const Icon: React.FC<IconProps> = ({ Component }) => (
  <Component size={40} stroke={1} className="text-zinc-600" />
);

export const cards = [
  {
    title: 'Rest Countries',
    description: '. ',
    image: '/images/rest-countries.png',
    code: 'https://github.com/marlissonsilva/rest-countries',
    deploy: 'https://rest-countries-msdevs-projects.vercel.app/',
    icons: [
      <Icon key="react" Component={IconBrandReact} />,
      <Icon key="next" Component={IconBrandNextjs} />,
      <Icon key="tailwind" Component={IconBrandTailwind} />,
      <Icon key="api" Component={IconApi} />,
    ],
  },
  {
    title: 'Fazer o bem a quem não tem',
    description:
      'Este projeto representa a concepção, planejamento e implementação de um website para uma Organização Não Governamental (ONG), desde a fase inicial até a entrega final, resultado de um trabalho voluntário. ',
    image: '/images/fazerobem.png',
    code: '',
    deploy: 'https://fazerobemaquemnaotem.com.br/',
    icons: [
      <Icon key="html5" Component={IconBrandHtml5} />,
      <Icon key="css" Component={IconBrandCss3} />,
      <Icon key="javascript" Component={IconBrandJavascript} />,
    ],
  },
  {
    title: 'Escola Weda',
    description:
      'Este projeto representa a concepção, planejamento e implementação de um website para uma Organização Não Governamental (ONG), desde a fase inicial até a entrega final, resultado de um trabalho voluntário. ',
    image: '/images/escola-weda.png',
    code: '',
    deploy: 'https://escolaweda.com.br/',
    icons: [
      <Icon key="html5" Component={IconBrandHtml5} />,
      <Icon key="javascript" Component={IconBrandJavascript} />,
      <Icon key="bootstrap" Component={IconBrandBootstrap} />,
    ],
  },
  {
    title: 'Página de Captura',
    description: '',
    image: '/images/page-capute-mockup.webp',
    code: 'https://github.com/marlissonsilva/capture-page',
    deploy: 'https://marlissonsilva.github.io/capture-page/',
    icons: [
      <Icon key="html5" Component={IconBrandHtml5} />,
      <Icon key="css" Component={IconBrandCss3} />,
      <Icon key="javascript" Component={IconBrandJavascript} />,
    ],
  },
  {
    title: 'Quiz',
    description: '',
    image: '/images/quiz.png',
    code: 'https://github.com/marlissonsilva/Quiz',
    deploy: 'https://quiz-futebolbrasileiro.netlify.app/',
    icons: [
      <Icon key="html5" Component={IconBrandHtml5} />,
      <Icon key="css" Component={IconBrandCss3} />,
      <Icon key="javascript" Component={IconBrandJavascript} />,
    ],
  },
  {
    title: 'City Weather',
    description: '',
    image: '/images/city-weather-mockup.webp',
    code: 'https://github.com/marlissonsilva/city-weather',
    deploy: 'https://marlissonsilva.github.io/city-weather/',
    icons: [
      <Icon key="html5" Component={IconBrandHtml5} />,
      <Icon key="css" Component={IconBrandCss3} />,
      <Icon key="javascript" Component={IconBrandJavascript} />,
      <Icon key="api" Component={IconApi} />,
    ],
  },
];
