import type { ExperienceData } from '@/types/experience';
import { tc } from '@/utils/techColor';

const beesFinancesTech = [tc('React'), tc('TypeScript'), tc('Redux'), tc('GraphQL'), tc('Jest'), tc('Cypress'), tc('Storybook'), tc('AWS'), tc('Azure'), tc('Jenkins'), tc('Docker'), tc('Git'), tc('Sass')];
const beesExpTech = [tc('React'), tc('TypeScript'), tc('CSS'), tc('Storybook'), tc('Jest'), tc('Cypress'), tc('Figma'), tc('AWS'), tc('Azure'), tc('Git'), tc('Jenkins'), tc('Sass')];
const kenvueTech = [tc('React'), tc('TypeScript'), tc('JavaScript'), tc('jQuery'), tc('Sass'), tc('CSS'), tc('Figma'), tc('AWS'), tc('Jenkins'), tc('Git')];
const pfgTech = [tc('JavaScript'), tc('React'), tc('Vue'), tc('CSS'), tc('Git'), tc('Jest')];
const bkTech = [tc('React'), tc('TypeScript'), tc('CSS'), tc('GraphQL'), tc('Node.js'), tc('AWS'), tc('Jenkins'), tc('Git'), tc('Storybook'), tc('Jest')];
const blipTech = [tc('React'), tc('Vue'), tc('TypeScript'), tc('JavaScript'), tc('CSS'), tc('Angular'), tc('Git'), tc('Storybook'), tc('Jest'), tc('Sass'), tc('Microservices')];
const totvsTech = [tc('Angular'), tc('TypeScript'), tc('JavaScript'), tc('CSS'), tc('Git'), tc('Sass'), tc('jQuery'), tc('Jest')];

export const experienceData: ExperienceData = {
  en: [
    {
      id: 'ciandt',
      name: 'CI&T',
      logoInitial: 'C',
      logoBg: '#E8F5E9',
      logoImage: '/images/experience/ciandt_logo.jpeg',
      period: 'May 2022 – Present',
      role: 'Software Engineer',
      responsibilities: [
        'Build web and mobile applications using React, Next.js, TypeScript, and Styled Components, collaborating with architecture teams on ADRs, Proofs of Concept, and Spikes across Azure and AWS environments.',
        'Collaborate with UI/UX teams via Figma, Optimizely, and Segment, ensuring quality and observability through New Relic, SonarQube, Cypress, and Jest.',
        'Lead refinement sessions, PR reviews, and mentor junior developers. Participating in CI&T\'s PDM (People Development Mentor) program focused on technical leadership across international teams in Europe, the US, and India.',
      ],
      projects: [
        {
          name: 'AB InBev – Bees Finances',
          period: '2025 – Present',
          description: 'Leading the frontend migration and new feature development for the finance module of the Bees platform. The module spans Android (Flutter), iOS (Swift), and React/Next.js for web. Responsible for refinements, PR reviews, mentoring junior developers, client sessions, and integrating payment providers (Stripe, Pix). Creating ADRs and technical documentation for the team.',
          techStack: beesFinancesTech,
        },
        {
          name: 'AB InBev – Experimentation Platform',
          period: '2024 – 2025',
          description: 'Built a platform to configure and manage experiments across Bees applications (Bees Customer, Zé Delivery). Users can set up parameters such as pricing, availability, regions, audience segments, start/end dates, and monitor logs and reports on experiment performance.',
          techStack: beesExpTech,
        },
        {
          name: 'Kenvue | Johnson & Johnson',
          period: '2024',
          description: 'Supported a global healthcare company in updating institutional websites and e-commerce platforms. Worked on a legacy system built with Drupal (PHP), Vanilla JS, jQuery, and Sass while contributing to its migration to a modern React-based solution. Collaborated with UX Writers to ensure concise, user-friendly interface content. Deployed in AWS with Jenkins.',
          techStack: kenvueTech,
        },
        {
          name: 'Poppulus Financial Group | PFG',
          period: '2023 – 2024',
          description: 'Contributed to a web and mobile loan platform for an American financial institution using Vanilla JS, Jekyll, React, and Vue. Maintained the system, added new features, and ensured stability in a trunk-based development environment with automated deployment through CloudCannon.',
          techStack: pfgTech,
        },
        {
          name: 'Burger King – IVR & Payment Gateway',
          period: '2022 – 2023',
          description: 'Collaborated with the migration control team to integrate payment systems with IVR for one of the world\'s largest fast-food chains. Built the application with React, Next.js, Styled Components, and a Design System. The backend used Node.js and GraphQL. Successfully delivered IVR integration with call centers and drive-thru stores, now in production across the Iberian region.',
          techStack: bkTech,
        },
        {
          name: 'AB InBev – Seller Equipment Loan',
          period: '2022',
          description: 'Built a B2B web application with Next.js, React, and TypeScript enabling sellers to loan furniture and equipment to their stores. Deployed across 250,000+ stores in Colombia, processing 500+ monthly transactions. Successfully expanded to El Salvador and Peru.',
          techStack: beesExpTech,
        },
      ],
    },
    {
      id: 'blip',
      name: 'Blip (former Take)',
      logoInitial: 'B',
      logoBg: '#E3F2FD',
      logoImage: '/images/experience/takeblip_logo.jpeg',
      period: 'May 2020 – Apr 2022',
      role: 'Front End Developer',
      responsibilities: [
        'Worked on a chatbot platform with a drag-and-drop interface integrating APIs and AI services from Google, IBM, and Microsoft.',
        'Contributed to the migration of the platform from AngularJS to React using a microfrontend architecture, migrating modules to React and maintaining a Vue component library.',
        'Worked with observability tools such as Grafana, New Relic, and SonarQube to ensure application quality and performance.',
      ],
      projects: [
        {
          name: 'Blip Builder – Chatbot Platform',
          period: 'May 2020 – Apr 2022',
          description: 'Contributed to building and evolving a drag-and-drop chatbot platform integrating AI services from Google, IBM, and Microsoft. Led the migration of key modules from AngularJS to React using a microfrontend architecture, while maintaining a shared Vue component library across the platform.',
          techStack: blipTech,
        },
      ],
    },
    {
      id: 'totvs',
      name: 'TOTVS',
      logoInitial: 'T',
      logoBg: '#F3E5F5',
      logoImage: '/images/experience/totvs_logo.jpeg',
      period: 'Oct 2016 – Apr 2020',
      role: 'System Analyst',
      responsibilities: [
        'Developed and maintained applications for Sebrae including a request management system built with AngularJS and later upgraded to Angular 7.',
        'Developed a web and mobile HR management platform using Ionic 3 and Angular 8.',
        'Helped lead a pilot Agile transformation using Scrum within the development team.',
      ],
      projects: [
        {
          name: 'Sebrae – Request Management System',
          period: 'Oct 2016 – Apr 2020',
          description: 'Built and maintained a request management system for Sebrae, initially developed with AngularJS and later upgraded to Angular 7. Also developed a web and mobile HR management platform using Ionic 3 and Angular 8, and helped lead a pilot Agile transformation using Scrum.',
          techStack: totvsTech,
        },
      ],
    },
  ],
  pt: [
    {
      id: 'ciandt',
      name: 'CI&T',
      logoInitial: 'C',
      logoBg: '#E8F5E9',
      logoImage: '/images/experience/ciandt_logo.jpeg',
      period: 'Mai 2022 – Presente',
      role: 'Engenheiro de Software',
      responsibilities: [
        'Construção de aplicações web e mobile com React, Next.js, TypeScript e Styled Components, colaborando com equipes de arquitetura em ADRs, Provas de Conceito e Spikes em ambientes Azure e AWS.',
        'Colaboração com equipes de UI/UX via Figma, Optimizely e Segment, garantindo qualidade e observabilidade com New Relic, SonarQube, Cypress e Jest.',
        'Liderança de sessões de refinamento, revisão de PRs e mentoria de desenvolvedores juniores. Participação no programa PDM (People Development Mentor) da CI&T focado em liderança técnica em equipes internacionais na Europa, EUA e Índia.',
      ],
      projects: [
        {
          name: 'AB InBev – Bees Finances',
          period: '2025 – Presente',
          description: 'Liderando a migração e desenvolvimento de novas funcionalidades para o módulo financeiro da plataforma Bees. O módulo abrange Android (Flutter), iOS (Swift) e React/Next.js para web. Responsável por refinamentos, revisão de PRs, mentoria de desenvolvedores juniores, sessões com clientes e integração de provedores de pagamento (Stripe, Pix). Criação de ADRs e documentação técnica.',
          techStack: beesFinancesTech,
        },
        {
          name: 'AB InBev – Plataforma de Experimentação',
          period: '2024 – 2025',
          description: 'Construção de uma plataforma para configurar e gerenciar experimentos nas aplicações Bees (Bees Customer, Zé Delivery). Permite configurar parâmetros como preços, disponibilidade, regiões, segmentos de audiência, datas de início/fim, e monitorar logs e relatórios de performance dos experimentos.',
          techStack: beesExpTech,
        },
        {
          name: 'Kenvue | Johnson & Johnson',
          period: '2024',
          description: 'Suporte a uma empresa global de saúde na atualização de sites institucionais e plataformas de e-commerce. Atuação em sistema legado com Drupal (PHP), Vanilla JS, jQuery e Sass, contribuindo para a migração para uma solução moderna baseada em React. Colaboração com UX Writers para conteúdo de interface conciso. Deploy em AWS com Jenkins.',
          techStack: kenvueTech,
        },
        {
          name: 'Poppulus Financial Group | PFG',
          period: '2023 – 2024',
          description: 'Contribuição em uma plataforma web e mobile de empréstimos para uma instituição financeira americana utilizando Vanilla JS, Jekyll, React e Vue. Manutenção do sistema, adição de novas funcionalidades e estabilidade em ambiente trunk-based com deploy automatizado via CloudCannon.',
          techStack: pfgTech,
        },
        {
          name: 'Burger King – IVR & Gateway de Pagamento',
          period: '2022 – 2023',
          description: 'Colaboração com a equipe de controle de migração para integrar sistemas de pagamento com IVR para uma das maiores redes de fast-food do mundo. Aplicação construída com React, Next.js, Styled Components e Design System. Backend em Node.js e GraphQL. Integração IVR com call centers e lojas drive-thru entregue com sucesso, em produção na região Ibérica.',
          techStack: bkTech,
        },
        {
          name: 'AB InBev – Empréstimo de Equipamentos',
          period: '2022',
          description: 'Construção de uma aplicação web B2B com Next.js, React e TypeScript para vendedores emprestarem móveis e equipamentos em suas lojas. Implantada em mais de 250.000 lojas na Colômbia, processando 500+ transações mensais. Expandida com sucesso para El Salvador e Peru.',
          techStack: beesExpTech,
        },
      ],
    },
    {
      id: 'blip',
      name: 'Blip (former Take)',
      logoInitial: 'B',
      logoBg: '#E3F2FD',
      logoImage: '/images/experience/takeblip_logo.jpeg',
      period: 'Mai 2020 – Abr 2022',
      role: 'Desenvolvedor Front End',
      responsibilities: [
        'Atuei em uma plataforma de chatbot com interface drag-and-drop integrando APIs e serviços de IA do Google, IBM e Microsoft.',
        'Contribuí para a migração da plataforma de AngularJS para React usando arquitetura de microfrontend, migrando módulos para React e mantendo uma biblioteca de componentes Vue.',
        'Trabalhei com ferramentas de observabilidade como Grafana, New Relic e SonarQube para garantir qualidade e performance das aplicações.',
      ],
      projects: [
        {
          name: 'Blip Builder – Plataforma de Chatbot',
          period: 'Mai 2020 – Abr 2022',
          description: 'Contribuí para a construção e evolução de uma plataforma de chatbot drag-and-drop integrando serviços de IA do Google, IBM e Microsoft. Liderei a migração de módulos-chave de AngularJS para React usando arquitetura de microfrontend, enquanto mantinha uma biblioteca de componentes Vue compartilhada pela plataforma.',
          techStack: blipTech,
        },
      ],
    },
    {
      id: 'totvs',
      name: 'TOTVS',
      logoInitial: 'T',
      logoBg: '#F3E5F5',
      logoImage: '/images/experience/totvs_logo.jpeg',
      period: 'Out 2016 – Abr 2020',
      role: 'Analista de Sistemas',
      responsibilities: [
        'Desenvolvimento e manutenção de aplicações para o Sebrae incluindo um sistema de gestão de demandas construído com AngularJS e posteriormente atualizado para Angular 7.',
        'Desenvolvimento de uma plataforma web e mobile de gestão de RH utilizando Ionic 3 e Angular 8.',
        'Auxiliei na condução de uma transformação Ágil piloto utilizando Scrum na equipe de desenvolvimento.',
      ],
      projects: [
        {
          name: 'Sebrae – Sistema de Gestão de Demandas',
          period: 'Out 2016 – Abr 2020',
          description: 'Construí e mantive um sistema de gestão de demandas para o Sebrae, inicialmente desenvolvido com AngularJS e posteriormente atualizado para Angular 7. Também desenvolvi uma plataforma web e mobile de gestão de RH usando Ionic 3 e Angular 8, e ajudei a liderar uma transformação Ágil piloto usando Scrum.',
          techStack: totvsTech,
        },
      ],
    },
  ],
  es: [
    {
      id: 'ciandt',
      name: 'CI&T',
      logoInitial: 'C',
      logoBg: '#E8F5E9',
      logoImage: '/images/experience/ciandt_logo.jpeg',
      period: 'May 2022 – Presente',
      role: 'Ingeniero de Software',
      responsibilities: [
        'Construcción de aplicaciones web y móviles con React, Next.js, TypeScript y Styled Components, colaborando con equipos de arquitectura en ADRs, Pruebas de Concepto y Spikes en entornos Azure y AWS.',
        'Colaboración con equipos de UI/UX vía Figma, Optimizely y Segment, asegurando calidad y observabilidad con New Relic, SonarQube, Cypress y Jest.',
        'Liderazgo de sesiones de refinamiento, revisión de PRs y mentoría de desarrolladores junior. Participación en el programa PDM (People Development Mentor) de CI&T enfocado en liderazgo técnico en equipos internacionales en Europa, EE.UU. e India.',
      ],
      projects: [
        {
          name: 'AB InBev – Bees Finances',
          period: '2025 – Presente',
          description: 'Liderando la migración y desarrollo de nuevas funcionalidades para el módulo financiero de la plataforma Bees. El módulo abarca Android (Flutter), iOS (Swift) y React/Next.js para web. Responsable de refinamientos, revisión de PRs, mentoría de desarrolladores junior, sesiones con clientes e integración de proveedores de pago (Stripe, Pix). Creación de ADRs y documentación técnica.',
          techStack: beesFinancesTech,
        },
        {
          name: 'AB InBev – Plataforma de Experimentación',
          period: '2024 – 2025',
          description: 'Construcción de una plataforma para configurar y gestionar experimentos en las aplicaciones Bees (Bees Customer, Zé Delivery). Permite configurar parámetros como precios, disponibilidad, regiones, segmentos de audiencia, fechas de inicio/fin, y monitorear logs e informes de rendimiento de los experimentos.',
          techStack: beesExpTech,
        },
        {
          name: 'Kenvue | Johnson & Johnson',
          period: '2024',
          description: 'Soporte a una empresa global de salud en la actualización de sitios institucionales y plataformas de e-commerce. Trabajo en sistema legado con Drupal (PHP), Vanilla JS, jQuery y Sass, contribuyendo a la migración a una solución moderna basada en React. Colaboración con UX Writers para contenido de interfaz conciso. Deploy en AWS con Jenkins.',
          techStack: kenvueTech,
        },
        {
          name: 'Poppulus Financial Group | PFG',
          period: '2023 – 2024',
          description: 'Contribución en una plataforma web y móvil de préstamos para una institución financiera americana utilizando Vanilla JS, Jekyll, React y Vue. Mantenimiento del sistema, adición de nuevas funcionalidades y estabilidad en ambiente trunk-based con deploy automatizado vía CloudCannon.',
          techStack: pfgTech,
        },
        {
          name: 'Burger King – IVR & Pasarela de Pago',
          period: '2022 – 2023',
          description: 'Colaboración con el equipo de control de migración para integrar sistemas de pago con IVR para una de las mayores cadenas de fast-food del mundo. Aplicación construida con React, Next.js, Styled Components y Design System. Backend en Node.js y GraphQL. Integración IVR con call centers y tiendas drive-thru entregada con éxito, en producción en la región Ibérica.',
          techStack: bkTech,
        },
        {
          name: 'AB InBev – Préstamo de Equipos',
          period: '2022',
          description: 'Construcción de una aplicación web B2B con Next.js, React y TypeScript para que vendedores presten muebles y equipos en sus tiendas. Implementada en más de 250.000 tiendas en Colombia, procesando 500+ transacciones mensuales. Expandida con éxito a El Salvador y Perú.',
          techStack: beesExpTech,
        },
      ],
    },
    {
      id: 'blip',
      name: 'Blip (former Take)',
      logoInitial: 'B',
      logoBg: '#E3F2FD',
      logoImage: '/images/experience/takeblip_logo.jpeg',
      period: 'May 2020 – Abr 2022',
      role: 'Desarrollador Front End',
      responsibilities: [
        'Trabajé en una plataforma de chatbot con interfaz drag-and-drop integrando APIs y servicios de IA de Google, IBM y Microsoft.',
        'Contribuí a la migración de la plataforma de AngularJS a React usando arquitectura de microfrontend, migrando módulos a React y manteniendo una biblioteca de componentes Vue.',
        'Trabajé con herramientas de observabilidad como Grafana, New Relic y SonarQube para garantizar la calidad y rendimiento de las aplicaciones.',
      ],
      projects: [
        {
          name: 'Blip Builder – Plataforma de Chatbot',
          period: 'May 2020 – Abr 2022',
          description: 'Contribuí a la construcción y evolución de una plataforma de chatbot drag-and-drop integrando servicios de IA de Google, IBM y Microsoft. Lideré la migración de módulos clave de AngularJS a React usando arquitectura de microfrontend, mientras mantenía una biblioteca de componentes Vue compartida por la plataforma.',
          techStack: blipTech,
        },
      ],
    },
    {
      id: 'totvs',
      name: 'TOTVS',
      logoInitial: 'T',
      logoBg: '#F3E5F5',
      logoImage: '/images/experience/totvs_logo.jpeg',
      period: 'Oct 2016 – Abr 2020',
      role: 'Analista de Sistemas',
      responsibilities: [
        'Desarrollo y mantenimiento de aplicaciones para Sebrae incluyendo un sistema de gestión de demandas construido con AngularJS y posteriormente actualizado a Angular 7.',
        'Desarrollo de una plataforma web y móvil de gestión de RRHH utilizando Ionic 3 y Angular 8.',
        'Ayudé a liderar una transformación Ágil piloto utilizando Scrum en el equipo de desarrollo.',
      ],
      projects: [
        {
          name: 'Sebrae – Sistema de Gestión de Demandas',
          period: 'Oct 2016 – Abr 2020',
          description: 'Construí y mantuve un sistema de gestión de demandas para Sebrae, inicialmente desarrollado con AngularJS y posteriormente actualizado a Angular 7. También desarrollé una plataforma web y móvil de gestión de RRHH usando Ionic 3 y Angular 8, y ayudé a liderar una transformación Ágil piloto usando Scrum.',
          techStack: totvsTech,
        },
      ],
    },
  ],
};
