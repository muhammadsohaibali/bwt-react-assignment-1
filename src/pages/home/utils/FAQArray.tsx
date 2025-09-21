import { HelpCircle } from "lucide-react";

export const faqsArray = [
    {
        icon: <HelpCircle className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />,
        question: 'What do you mean by "Figma assets"?',
        answer: `You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.`,
    },
    {
        icon: <HelpCircle className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />,
        question: 'What does "lifetime access" exactly mean?',
        answer: `Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.`,
    },
    {
        icon: <HelpCircle className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />,
        question: 'How does support work?',
        answer: `We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project. Feel free to contact us and we'll help you out as soon as we can.`,
        link: { text: 'contact us', href: '#' },
    },
    {
        icon: <HelpCircle className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />,
        question: 'I want to build more than one project. Is that allowed?',
        answer: `You can use Windster for an unlimited amount of projects, whether it's a personal website, a SaaS app, or a website for a client. As long as you don't build a product that will directly compete with Windster either as a UI kit, theme, or template, it's fine.`,
        link: { text: 'reading the license', href: '#' },
    },
    {
        icon: <HelpCircle className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />,
        question: 'What does "free updates" include?',
        answer: `The free updates that will be provided is based on the roadmap that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.`,
        link: { text: 'roadmap', href: '#' },
    },
    {
        icon: <HelpCircle className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />,
        question: 'What does the free version include?',
        answer: `The free version of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it. You can use this version for any purposes, because it is open-source under the MIT license.`,
        link: { text: 'free version', href: '#' },
    },
    {
        icon: <HelpCircle className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />,
        question: 'What is the difference between Windster and Tailwind UI?',
        answer: `Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes. Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces.`,
    },
    {
        icon: <HelpCircle className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />,
        question: 'Can I use Windster in open-source projects?',
        answer: `Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to Windster itself. With that being said, feel free to use this design kit for your open-source projects.`,
        link: { text: 'reading the license', href: '#' },
    },
];