import {
  chatsac,
  codeline,
  cripto,
  Hybrido,
  mineria,
  pictiax1,
  pictiax2,
  pictiax3,
  pictiax4,
  pictiaxEvent,
  pictiaxFlow,
  pisopro1,
  pisopro2,
  pisopro3,
  opencv,
  pecas,
  xatoxi,
} from '../assets/images'
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  home,
  typescript,
  python,
  figma,
  angular,
  arduino,
  electronica,
  phone,
  game,
  hamburger,
  snap360,
  pisopro,
  docker,
  kubernetes,
  django,
  dart,
  reactNative,
  aws,
  laravel,
  postgresql,
  redis,
  flutter,
} from '../assets/icons'

export const skills = [
  {
    id: 'react',
    name: 'React',
    imageUrl: react,
    icon: react,
    category: 'frontend',
    group: 'frontend',
    description:
      'Desarrollo de SPAs reactivas y sistemas de componentes reutilizables de alto rendimiento.',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    imageUrl: nextjs,
    icon: nextjs,
    category: 'frontend',
    group: 'frontend',
    description:
      'Construcción de aplicaciones web SSR/SSG, optimización SEO e interfaces dinámicas.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    imageUrl: typescript,
    icon: typescript,
    category: 'frontend',
    group: 'frontend',
    description:
      'Tipado estático avanzado para garantizar mantenibilidad y prevenir errores en producción.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    imageUrl: javascript,
    icon: javascript,
    category: 'frontend',
    group: 'frontend',
    description:
      'Lógica Frontend/Backend pura, manipulación del DOM y algoritmos de vectorización.',
  },
  {
    id: 'html',
    name: 'HTML5',
    imageUrl: html,
    icon: html,
    category: 'frontend',
    group: 'frontend',
    description: 'Maquetación semántica, accesible y estándares modernos del web.',
  },
  {
    id: 'css',
    name: 'CSS3',
    imageUrl: css,
    icon: css,
    category: 'frontend',
    group: 'frontend',
    description: 'Maquetación semántica, accesible y estándares modernos del web.',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    imageUrl: tailwindcss,
    icon: tailwindcss,
    category: 'frontend',
    group: 'frontend',
    description:
      'Diseño UI responsivo, utilitario y personalización de temas ágiles.',
  },
  {
    id: 'mui',
    name: 'Material UI',
    imageUrl: mui,
    icon: mui,
    category: 'frontend',
    group: 'frontend',
    description:
      'Implementación rápida de dashboards y sistemas de diseño corporativos.',
  },
  {
    id: 'angular',
    name: 'Angular',
    imageUrl: angular,
    icon: angular,
    category: 'frontend',
    group: 'frontend',
    description:
      'Desarrollo de módulos empresariales estructurados y gestión de estado.',
  },
  {
    id: 'python',
    name: 'Python',
    imageUrl: python,
    icon: python,
    category: 'backend',
    group: 'backend',
    description:
      'Desarrollo backend con Django/FastAPI, scripts de automatización y visión por computadora.',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    imageUrl: nodejs,
    icon: nodejs,
    category: 'backend',
    group: 'backend',
    description:
      'Creación de microservicios, APIs RESTful y motores de mensajería asíncrona.',
  },
  {
    id: 'laravel',
    name: 'Laravel',
    imageUrl: laravel,
    icon: laravel,
    category: 'backend',
    group: 'backend',
    description:
      'Arquitectura MVC backend, APIs estructuradas y gestión de servicios web.',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    imageUrl: postgresql,
    icon: postgresql,
    category: 'backend',
    group: 'backend',
    description:
      'Modelado relacional, consultas complejas, índices y migraciones de datos.',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    imageUrl: mongodb,
    icon: mongodb,
    category: 'backend',
    group: 'backend',
    description:
      'Almacenamiento NoSQL para documentos dinámicos y esquemas flexibles.',
  },
  {
    id: 'redis',
    name: 'Redis',
    imageUrl: redis,
    icon: redis,
    category: 'backend',
    group: 'backend',
    description:
      'Caching de alta velocidad, gestión de sesiones e ingesta de datos en tiempo real.',
  },
  {
    id: 'docker',
    name: 'Docker',
    imageUrl: docker,
    icon: docker,
    category: 'devops',
    group: 'devops',
    description:
      'Contenerización de microservicios y entornos de desarrollo/producción aislados.',
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    imageUrl: kubernetes,
    icon: kubernetes,
    category: 'devops',
    group: 'devops',
    description:
      'Orquestación de contenedores, auto-escalado y gestión de infraestructura Cloud.',
  },
  {
    id: 'aws',
    name: 'AWS',
    imageUrl: aws,
    icon: aws,
    category: 'devops',
    group: 'devops',
    description:
      'Despliegue de infraestructura Serverless, almacenamiento S3 y gestión de instancias EC2.',
  },
  {
    id: 'git',
    name: 'Git',
    imageUrl: git,
    icon: git,
    category: 'devops',
    group: 'devops',
    description:
      'Control de versiones, flujos GitFlow y automatización de CI/CD Actions.',
  },
  {
    id: 'github',
    name: 'GitHub',
    imageUrl: github,
    icon: github,
    category: 'devops',
    group: 'devops',
    description:
      'Control de versiones, flujos GitFlow y automatización de CI/CD Actions.',
  },
  {
    id: 'flutter',
    name: 'Flutter',
    imageUrl: flutter,
    icon: flutter,
    category: 'mobile',
    group: 'mobile',
    description:
      'Desarrollo de aplicaciones móviles multiplataforma (iOS y Android) de alto rendimiento.',
  },
  {
    id: 'reactNative',
    name: 'React Native',
    imageUrl: reactNative,
    icon: reactNative,
    category: 'mobile',
    group: 'mobile',
    description:
      'Construcción de aplicaciones móviles nativas compartiendo lógica en React.',
  },
  {
    id: 'arduino',
    name: 'Arduino',
    imageUrl: arduino,
    icon: arduino,
    category: 'mobile',
    group: 'mobile',
    description:
      'Programación de microcontroladores y lógica de control de sensores en tiempo real.',
  },
  {
    id: 'iot',
    name: 'Hardware / Robótica',
    imageUrl: electronica,
    icon: electronica,
    category: 'mobile',
    group: 'mobile',
    description:
      'Integración de circuitos, actuadores y brazos robóticos controlados por software.',
  },
]

export const experiences = [
  {
    id: 'pisopro',
    title: 'Lead Software Engineer & DevOps Architect',
    company_name: 'PisoPro',
    icon: pisopro,
    iconBg: '#1D4B87',
    date: 'Feb 2025 - Presente',
    points: [
      'Lidero la ingeniería de software y la arquitectura end-to-end de un CRM inmobiliario SaaS impulsado por IA.',
      'Diseñé la arquitectura multitenant (gestión de licencias y características por cliente), backend en Python (Django) e interfaces dinámicas con Next.js, React y TypeScript.',
      'Diseñé y refactoricé la arquitectura del motor multichat, separando la lógica operativa en paquetes de dominio para canalizar la mensajería de forma escalable.',
      'Orquesto la infraestructura Cloud y CI/CD en DigitalOcean con Docker y Kubernetes, integrando monitoreo de errores en tiempo real y enrutamiento automatizado a sprints.',
      'Migré el almacenamiento de plantillas dinámicas a bases de datos relacionales (PostgreSQL/Redis) e integré pipelines de sincronización de datos mediante APIs REST e ingesta en tiempo real.',
    ],
    link: 'https://pisopro.com/',
  },
  {
    id: 'snap360',
    title: 'Robotics & Full-Stack Engineer',
    company_name: 'Snap360 / FotomatonShop (PictiaX)',
    icon: snap360,
    iconBg: '#F54927',
    date: 'Feb 2025 – Jul 2025',
    points: [
      'Desarrollé y optimicé los algoritmos de vectorización de trazos y visión por computadora para PictiaX (sistema que convierte brazos robóticos en retratistas con IA).',
      'Diseñé la lógica de contornos en Python para generar trazados limpios y precisos en hardware robótico durante eventos en vivo.',
      'Construí las plataformas web y la infraestructura móvil con Flutter, Next.js, React, TypeScript y Firebase.',
      'Implementé arquitecturas de procesamiento multimedia y sincronización en tiempo real entre la nube y el hardware robótico.',
    ],
    link: 'https://pictiax.com/',
  },
  {
    id: 'chatsac',
    title: 'Software Engineer & Automation Specialist',
    company_name: 'ChatSac',
    icon: chatsac,
    iconBg: '#ffff',
    date: 'October 2024 - January 2025',
    points: [
      'Diseñé y refactoricé la arquitectura del motor multichat, separando la lógica operativa en paquetes de dominio en Python y Node.js.',
      'Construí flujos de automatización de mensajería e integración de canales conversacionales utilizando n8n para la orquestación de workflows.',
      'Desarrollé scripts de automatización web y procesamiento de datos mediante Selenium, Puppeteer y conexiones con APIs REST.',
    ],
    link:'https://chatsac.com/'
  },
  {
    id: 'xatoxi',
    title: 'Desarrollador Frontend',
    company_name: 'Xatoxi',
    icon: xatoxi,
    iconBg: '#ffff',
    date: 'March 2024 - September 2024',
    points: [
      'Use JavaScript in its most basic and original form, without add any external libraries or framework, such as jQuery, React or Angular to develop frontend.'
    ],
     link:'https://www.xatoxi.app'
  },
  {
    id: 'codeline',
    title: 'React Frontend Engineer',
    company_name: 'Code Line',
    icon: codeline,
    iconBg: '#5270fd',
    date: 'September 2023 - March 2024',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
      link:'https://codeline.lat/'
  },
  {
    id: 'hybrido',
    title: 'Creative Full-stack Developer',
    company_name: 'hybrido.studio',
    icon: Hybrido,
    iconBg: '#145f98',
    date: 'February 2022 - September 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
   link:'https://hybrido.studio/'
  },
  {
    id: 'crypto',
    title: 'Electronic Engineer',
    company_name: 'Crypto BTC Venezuela',
    icon: cripto,
    iconBg: '#ffc027',
    date: 'January 2020 - February 2022',
    points: [
      'Managed databases and designed web pages.',
      'Coordinated employees and proposed new business ventures.',
      'epaired electronic cards and provided maintenance to electronic equipment for various clients, including a major mining company and a government agency.',
      'Managed databases and designed web pages that increased user engagement by 20% and improved customer satisfaction by 15%.',
    ],
  },
  {
    id: 'mineria',
    title: 'It Engineer',
    company_name: 'Mineria Texas Colombia',
    icon: mineria,
    iconBg: '#407831',
    date: 'March 2018 - April 2019',
    points: [
      'Developed and maintained static web pages using HTML, CSS, and JavaScript.',
      'Managed relational databases using SQL Server.',
      'Assisted employees with LAN and WAN network issues.',
      'Provided technical support to employees.',
      'Followed project schedules and met deadlines',
    ],
  }
]

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/jhonshua',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/julio-cesar-llinas-ba65a6127/',
  },
]

export const projects = [
  {
    id: 'pisopro',
    name: 'PisoPro — AI-Driven Real Estate CRM & Multichannel Inbox',
    description:
      'Plataforma SaaS integral para el sector inmobiliario. Incluye motor de mensajería unificada (WhatsApp/Gmail), arquitectura multitenant, paneles de autenticación y landing page orientada a conversión.',
    stack: [
      'Python',
      'Django',
      'Next.js',
      'TypeScript',
      'WebSockets',
      'PostgreSQL',
      'Docker',
    ],
    gallery: [
      { id: 'landing', src: pisopro3, label: 'Landing' },
      { id: 'auth', src: pisopro2, label: 'Autenticación' },
      { id: 'inbox', src: pisopro1, label: 'Inbox Multicanal' },
    ],
    link: 'https://pisopro.com/',
  },
  {
    id: 'snap360',
    name: 'Snap360 — Multiplatform Event Ecosystem',
    description:
      'Plataforma web y móvil multiplataforma para la gestión y captura de eventos 360°. Incluye administración de eventos desde panel web, personalización de plantillas en tiempo real y sincronización en la nube para miles de usuarios.',
    stack: [
      'Flutter',
      'React Native',
      'Next.js',
      'TypeScript',
      'Firebase',
      'APIs REST',
    ],
    gallery: [
      { id: 'landing', src: pictiax3, label: 'Landing' },
      { id: 'admin', src: pictiax2, label: 'Web Admin' },
    ],
    link: 'https://snap360app.com/',
  },
  {
    id: 'pictiax',
    name: 'PictiaX — AI Sketch Robot Engine',
    description:
      'Sistema de visión por computadora e inteligencia artificial para el control de brazos robóticos trazadores en vivo. Implementa algoritmos de vectorización de contornos en tiempo real y comunicación directa con hardware robótico para eventos de alto nivel.',
    stack: [
      'Python',
      'OpenCV',
      'Hardware Integration',
      'Vision Systems',
      'Real-Time Vectorization',
    ],
    gallery: [
      { id: 'robot', src: pictiax1, label: 'Brazo robótico' },
      { id: 'lab', src: pictiax4, label: 'Laboratorio' },
      { id: 'event', src: pictiaxEvent, label: 'Evento' },
      { id: 'flow', src: pictiaxFlow, label: 'Arquitectura', fit: 'contain' },
    ],
    link: 'https://pictiax.com/',
  },
  {
    id: 'sitam',
    name: 'MERN administrative application “Sitam”',
    description:
      'In this project we cover the entire development cycle, from front-end (client side) to backend (server side). A scalable and documented project, always taking care of correct practices.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    gallery: [
      {
        id: 'video',
        label: 'Video',
        video: 'https://www.youtube.com/embed/ME6o9UVPc3U',
        thumb: 'https://i.ytimg.com/vi/ME6o9UVPc3U/hqdefault.jpg',
      },
      {
        id: 'capture',
        label: 'Captura',
        src: 'https://i.ytimg.com/vi/ME6o9UVPc3U/maxresdefault.jpg',
        thumb: 'https://i.ytimg.com/vi/ME6o9UVPc3U/hqdefault.jpg',
      },
    ],
    link: 'https://admin.sitamm.com/login',
  },
  {
    id: 'pasta',
    name: 'Pasta Restaurante Italiano ecommerce',
    description:
      'This application has a responsive design and consists of ecommerce for a restaurant, users have various levels of authorization and payment platform.',
    stack: [],
    gallery: [
      {
        id: 'video',
        label: 'Video',
        video: 'https://www.youtube.com/embed/FhzojXpYr_g',
        thumb: 'https://i.ytimg.com/vi/FhzojXpYr_g/hqdefault.jpg',
      },
    ],
    link: 'https://alfredos.last.shop/',
  },
  {
    id: 'gamejs',
    name: 'Computer game development',
    description:
      'This classic 2D arcade game puts players in control of a dog tasked with collecting all the bones while avoiding enemy attacks. Despite its simple premise, the game offers a challenging and rewarding experience that becomes increasingly difficult as players progress.',
    stack: ['JavaScript', 'Phaser', 'HTML5'],
    gallery: [
      {
        id: 'capture',
        label: 'Captura',
        src: pecas,
        thumb: pecas,
        fit: 'contain',
        fitBg: 'bg-slate-950',
      },
      {
        id: 'video',
        label: 'Video',
        video: 'https://www.youtube.com/embed/nZfKACwo0fk',
        thumb: 'https://i.ytimg.com/vi/nZfKACwo0fk/hqdefault.jpg',
      },
    ],
    link: 'https://jhonshua.github.io/Juego-Js/',
    code: 'https://github.com/jhonshua/juego-js',
  },
  {
    id: 'chat',
    name: 'MERN Chat Application with JWT and WebSockets',
    description:
      'This chat application was developed using the MERN stack (MongoDB, Express, React, Node.js). It uses JWT (JSON Web Tokens) for authentication and WebSockets for real-time communication. The app allows users to register and create an account. Once a user is authenticated, they can send and receive messages from other users in real time.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'WebSockets'],
    gallery: [
      {
        id: 'video',
        label: 'Video',
        video: 'https://www.youtube.com/embed/HldH7_533hk',
        thumb: 'https://i.ytimg.com/vi/HldH7_533hk/hqdefault.jpg',
      },
      {
        id: 'capture',
        label: 'Captura',
        src: 'https://i.ytimg.com/vi/HldH7_533hk/maxresdefault.jpg',
        thumb: 'https://i.ytimg.com/vi/HldH7_533hk/hqdefault.jpg',
      },
    ],
    link: 'https://front-websockets.vercel.app',
  },
  {
    id: 'handsign',
    name: 'Computer Vision Sign Detection',
    description:
      'Pipeline de visión por computadora para American Sign Language en tiempo real. Combina detección de la mano y extracción de contornos con OpenCV, clasificación con un modelo TensorFlow/Keras entrenado con dataset propio, e inferencia en vivo a través de una interfaz React.',
    stack: ['Python', 'OpenCV', 'TensorFlow/Keras', 'React', 'Computer Vision'],
    gallery: [
      {
        id: 'video',
        label: 'Video',
        video: 'https://www.youtube.com/embed/QT7jvfxSojs',
        thumb: 'https://i.ytimg.com/vi/QT7jvfxSojs/hqdefault.jpg',
      },
      {
        id: 'opencv',
        label: 'OpenCV',
        src: opencv,
        thumb: opencv,
        fit: 'contain',
      },
    ],
    certificate:
      'https://courses.opencv.org/certificates/19788eab46504361b73fc1d7d1a90425',
  },
]
