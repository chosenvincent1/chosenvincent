
export interface Company {
  id: number
  name: string
  description: string
  logo: string
  website: string
}


export interface Project {
  id: number
  name: string
  description: string
  image: string
  link: string
  category?: string
  company?: string
  title?: string
}


export const content = {
  writing: {
    hero: {
      typed: "Hello, <br/> I'm Chosen, a Technical Writer.",
      description:
        "I write API and developer docs, tutorials, and guides for B2B SaaS. I've published 100+ articles for companies like Middleware, TestMu AI (formerly LambdaTest), Tricentis, InfluxData, Acceldata, Spin.AI, and Autify.",
    },
    about: {
      heading: "* ABOUT",
      paragraphs: [
        "I'm a technical writer and software developer with a B.Sc in Computer Science. I code before I write.",
        "My background in development enables me to test every code example before publishing. If it doesn't work on my machine, it doesn't go in the article. This approach helps me create documentation that developers actually want to read.",
        "I've worked with companies like Middleware on infrastructure monitoring guides, TestMu AI on test automation tutorials, and built API documentation for a payment and delivery system.",
      ],
    },
    skills: [
        {
          title: "Technical Writing",
          items: ["API Documentation", "Developer Tutorials", "Product Documentation", "Technical Guides"],
        },
        {
          title: "Development",
          items: ["React & TypeScript", "Node.js & Express", "Cypress & Playwright", "HTML/CSS/JavaScript"],
        },
        {
          title: "Tools & Technologies",
          items: ["Git & GitHub", "Markdown & Postman", "GitBook, ReadMe, and Mintlify", "OpenAPI Specification"],
        },
      ],
    footer: {
      quote: '"Good documentation is like good code. It should be clear, tested, and actually work."',
    },
    companies: [
        {
            id: 1,
            name: 'TestMu AI',
            description: 'AI-powered test automation platform helping developers build reliable software faster.',
            logo: '/images/testmu_ai_logo.jpeg',
            website: 'https://www.testmuai.com/'
        },
        {
            id: 2,
            name: 'Middleware',
            description: 'Full-stack cloud observability platform for monitoring infrastructure, applications, and logs.',
            logo: '/images/middleware.png',
            website: 'https://www.middleware.io/'
        },
        {
            id: 3,
            name: 'Hit Subscribe',
            description: 'Content marketing agency specializing in developer-focused technical content and documentation.',
            logo: '/images/Hit-Subscribe.webp',
            website: 'https://www.hitsubscribe.com/'
        },
        {
            id: 4,
            name: 'Tricentis',
            description: 'Enterprise continuous testing platform for automated software testing and quality assurance.',
            logo: '/images/Tricentis-Logo.png',
            website: 'https://www.tricentis.com/'
        },
        {
            id: 5,
            name: 'Autify',
            description: 'No-code test automation platform for web and mobile applications using AI-powered testing.',
            logo: '/images/Autify-Logo.png',
            website: 'https://autify.com/'
        },
        {
            id: 6,
            name: 'Spin.AI',
            description: 'SaaS security platform providing backup, ransomware protection, and data loss prevention.',
            logo: '/images/SpinAI_Logo.jpg',
            website: 'https://www.spin.ai/'
        }
    ],
    projects: [
        {
            id: 1,
            title: 'Linux Infrastructure Monitoring with Middleware',
            category: 'Guide',
            description: 'Complete guide to monitoring Linux servers covering agent installation, key metrics, alert configuration, and troubleshooting.',
            link: 'https://middleware.io/blog/linux-infrastructure-monitoring-with-middleware/',
            company: 'Middleware'
        },
        {
            id: 2,
            title: 'Windows Infrastructure Monitoring: A Complete Guide',
            category: 'Guide',
            description: 'Complete guide to monitoring Windows Server with agent installation, metric interpretation, and production troubleshooting.',
            link: 'https://middleware.io/blog/windows-infrastructure-monitoring-with-middleware/',
            company: 'Middleware'
        },
        {
            id: 3,
            title: 'Memory Leaks: Detection and Prevention Guide',
            category: 'Guide',
            description: 'Guide to detecting and preventing memory leaks across frontend, backend, and microservices architectures.',
            link: 'https://middleware.io/blog/memory-leaks/',
            company: 'Middleware'
        },
        
        // TUTORIALS
        {
            id: 4,
            title: 'Cypress Component Testing: A Complete Tutorial',
            category: 'Tutorial',
            description: 'Step-by-step guide to testing React components with Cypress including local setup and cloud execution.',
            link: 'https://www.lambdatest.com/blog/cypress-component-testing/',
            company: 'TestMu AI (formerly LambdaTest)'
        },
        {
            id: 5,
            title: 'Getting Started with Playwright and JavaScript',
            category: 'Tutorial',
            description: 'Beginner-friendly tutorial on browser automation with Playwright covering setup, test creation, and CI/CD integration.',
            link: 'https://autify.com/blog/playwright-javascript',
            company: 'Autify'
        },
        
        // EXPLANATIONS
        {
            id: 6,
            title: "The Developer’s Guide to AI Memory: Mem0 vs OpenAI Memory",
            category: 'Explanation',
            description: 'Comparison of Mem0 and OpenAI Memory, covering architecture, benchmarks, and practical guidance for developers building AI applications with persistent memory.',
            link: 'https://chosenvincent.hashnode.dev/mem0-vs-openai-memory-ai-memory-layer',
            company: 'Me on Hashnode'
        },
        {
            id: 7,
            title: 'What Are AI Agents? A Complete Guide',
            category: 'Explanation',
            description: 'Complete guide to AI agents covering architecture, use cases, and practical DevOps applications.',
            link: 'https://middleware.io/blog/what-are-ai-agents/',
            company: 'Middleware'
        },
        {
            id: 8,
            title: 'Exit Code 137 in Kubernetes: Causes and Fixes',
            category: 'Explanation',
            description: 'Deep dive into Kubernetes OOMKilled errors covering root cause analysis and production troubleshooting strategies.',
            link: 'https://middleware.io/blog/exit-code-137-in-kubernetes-causes-diagnosis-fixes/',
            company: 'Middleware'
        },
        {
            id: 9,
            title: 'Mock Delivery API Documentation',
            category: 'API Docs',
            description: 'Complete API documentation for 50+ endpoints covering delivery management, tracking, and analytics built with GitBook and OpenAPI.',
            link: 'https://chosen-1.gitbook.io/mock-delivery-api-doc/',
            company: 'Me with GitBook'
        },
        {
            id: 10,
            title: 'Plaid API Documentation',
            category: 'API Docs',
            description: 'Technical documentation for 20+ Plaid payment and banking endpoints with authentication, transactions, and account verification.',
            link: 'https://documenter.getpostman.com/view/26275816/2sBXVme8Mj',
            company: 'Me with Postman'
        },
    ],
  },




  development: {
    hero: {
      typed: "Hi, <br/> I'm Chosen, a Frontend Developer",
      description:
        "I build web applications with React and TypeScript. Clean code, attention to detail, and interfaces that hold up in production. I've contributed to projects for companies like Compass UOL and Invillia, building new features and refactoring codebases to be more maintainable and performant.",
    },
    about: {
      heading: "* ABOUT",
      paragraphs: [
        "I'm a frontend developer with a B.Sc in Computer Science and 3+ years of experience building web applications.",
        "I've worked for <a href='https://compass.uol/en/home/' target='_blank' rel='noopener noreferrer'>Compass UOL</a> and <a href='https://www.invillia.ai/en/home/' target='_blank' rel='noopener noreferrer'>Invillia</a>, where I built and maintained features for <a href='https://yamaha-motor.com/' target='_blank' rel='noopener noreferrer'>Yamaha Motor USA</a> and <a href='https://lliaplatform.com/en/home/' target='_blank' rel='noopener noreferrer'>LLIA</a> — refactoring codebases, integrating CMS, writing automation tests, and shipping production features with React, TypeScript, Tailwind, and TanStack.",
        "I also have a background in technical writing, which makes me think carefully about developer experience — both in the code I write and the interfaces I build."
    ],
    },
    skills: [
        {
          title: "Frontend",
          items: ["React & TypeScript", "Tailwind CSS", "HTML/CSS/JavaScript", "Responsive Design"],
        },
        {
          title: "Backend & Testing",
          items: ["Node.js & Express", "Cypress & Playwright", "REST APIs", "Git & GitHub"],
        },
        {
          title: "Tools",
          items: ["Vite", "Postman", "Figma", "Vercel"],
        },
      ],
    footer: {
      quote: '"Good code, like good documentation, should speak for itself."',
    },
    companies: [
        {
            id: 1,
            name: 'Compass UOL',
            description: 'Brazilian technology services company focused on digital transformation and software development.',
            logo: '/images/compass-uol-logo.png',
            website: 'https://compass.uol/en/home/'
        },
        {
            id: 2,
            name: 'Invillia',
            description: 'Global software development company building scalable digital products and platforms.',
            logo: '/images/invillia-logo.jpg',
            website: 'https://www.invillia.ai/en/home/'
        }
    ],
    projects: [
        {
            id: 1,
            name: 'Yamaha Motor USA',
            description: 'Yamaha Motor USA is a powersports and outdoor recreation platform covering vehicles, parts, and apparel. I refactored the codebase from JavaScript to TypeScript, made all website content dynamic through a CMS integration, and built new features and components using React, TypeScript, SCSS, and Bitbucket.',
            image: '/images/yamaha-motors.png',
            link: 'https://yamaha-motor.com/'
        },
        {
            id: 2,
            name: 'LLIA',
            description: 'LLIA is an internal AI-powered hiring platform that automates candidate interviews and assists teams in evaluating talent. I started by writing automation tests with Cypress, then moved into building new features and fixing bugs using React, TypeScript, Tailwind, TanStack, and GitHub.',
            image: '/images/llia.png',
            link: 'https://lliaplatform.com/en/home/'
        }
    ]
  },
}