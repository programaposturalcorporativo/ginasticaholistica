
import { PlanType, UserRole, Lesson, LiveClass, Company, Challenge } from './types';

export const MOCK_LESSONS: Lesson[] = [
  {
    id: '1',
    title: 'Boas-vindas à Ginástica Holística',
    description: 'Entenda os princípios e como aproveitar ao máximo o programa.',
    duration: '05:00',
    thumbnail: 'https://picsum.photos/seed/welcome/800/450',
    category: 'WELCOME',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
  },
  {
    id: '2',
    title: 'Pausa para quem usa Computador',
    description: 'Alívio rápido para punhos, ombros e cervical.',
    duration: '07:00',
    thumbnail: 'https://picsum.photos/seed/pc/800/450',
    category: 'PAUSE',
    videoUrl: '#'
  },
  {
    id: '3',
    title: 'Pescoço Solto',
    description: 'Exercícios focados em liberar a tensão da base do crânio.',
    duration: '06:00',
    thumbnail: 'https://picsum.photos/seed/neck/800/450',
    category: 'PAUSE',
    videoUrl: '#'
  },
  {
    id: '4',
    title: 'Lombar Aliviada',
    description: 'Série para soltar a musculatura paravertebral.',
    duration: '08:00',
    thumbnail: 'https://picsum.photos/seed/back/800/450',
    category: 'PAUSE',
    videoUrl: '#'
  },
  {
    id: '5',
    title: 'Alinhamento de Coluna I',
    description: 'Trabalho de consciência corporal e postura global.',
    duration: '20:00',
    thumbnail: 'https://picsum.photos/seed/spine/800/450',
    category: 'SERIES',
    videoUrl: '#'
  },
  {
    id: '6',
    title: 'Respiração e Relaxamento',
    description: 'Técnicas para reduzir o estresse e destravar o diafragma.',
    duration: '15:00',
    thumbnail: 'https://picsum.photos/seed/breath/800/450',
    category: 'BREATH',
    videoUrl: '#'
  }
];

export const MOCK_COMPANIES: Company[] = [
  {
    id: 'comp1',
    name: 'TechInovação S.A.',
    plan: PlanType.PLUS,
    employeeCount: 450,
    activeEmployees: 312,
    joinDate: '2023-10-12'
  },
  {
    id: 'comp2',
    name: 'Escritório Advocacia Silva',
    plan: PlanType.ESSENTIAL,
    employeeCount: 45,
    activeEmployees: 42,
    joinDate: '2024-01-05'
  }
];

export const MOCK_LIVE_CLASSES: LiveClass[] = [
  {
    id: 'lc1',
    title: 'Série Postural Ao Vivo - TechInovação',
    date: '2024-05-28',
    time: '09:00',
    link: 'https://zoom.us/j/example1',
    instructor: 'Renata Couto',
    companyId: 'comp1'
  },
  {
    id: 'lc2',
    title: 'Plantão de Suporte Tira-Dúvidas',
    date: '2024-05-30',
    time: '15:00',
    link: 'https://meet.google.com/abc-defg-hij',
    instructor: 'Renata Couto'
  }
];

export const MOCK_CHALLENGES: Challenge[] = [
  {
    id: 'ch1',
    title: '5 Dias sem Dor no Pescoço',
    days: 5,
    description: 'Uma trilha focada em eliminar tensões cervicais acumuladas no trabalho.',
    lessons: MOCK_LESSONS.slice(1, 4) // Example mapping
  }
];
