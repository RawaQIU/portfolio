import {
    mobile,
    backend,
    creator,
    javascript,
    typescript,
    html,
    scooter,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    korek,
    downloads,
    industry,
    meta,
    starbucks,
    poster,
    tesla,
    shopify,
    carrent,
    jobit,
    yt,
    industryimg,
    tripguide,
    threejs,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Explore',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Poster',
        icon: poster,
    },
    {
        title: 'Korek Visit Video',
        icon: yt,
    },
    {
        title: 'Industry Talk Report',
        icon: backend,
    },
    {
        title: 'Content Creator',
        icon: creator,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },

    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
];

const experiences = [
    {
        //     title: 'Industrial Talk Poster',
        //     company_name: 'Technology & Information',
        //     icon: starbucks,
        //     bg: poster,
        //     iconBg: '#383E56',
        //     date: '2024',
        //     points: [
        //         'Download',
        //         'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
        //         'Implementing responsive design and ensuring cross-browser compatibility.',
        //         'Participating in code reviews and providing constructive feedback to other developers.',
        //     ],
        // },
        // {
        //     title: 'React Native Developer',
        //     company_name: 'Tesla',
        //     icon: tesla,
        //     iconBg: '#E6DEDD',
        //     date: 'Jan 2021 - Feb 2022',
        //     points: [
        //         'Developing and maintaining web applications using React.js and other related technologies.',
        //         'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
        //         'Implementing responsive design and ensuring cross-browser compatibility.',
        //         'Participating in code reviews and providing constructive feedback to other developers.',
        //     ],
        // },
        // {
        //     title: 'Web Developer',
        //     company_name: 'Shopify',
        //     icon: shopify,
        //     iconBg: '#383E56',
        //     date: 'Jan 2022 - Jan 2023',
        //     points: [
        //         'Developing and maintaining web applications using React.js and other related technologies.',
        //         'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
        //         'Implementing responsive design and ensuring cross-browser compatibility.',
        //         'Participating in code reviews and providing constructive feedback to other developers.',
        //     ],
        // },
        // {
        //     title: 'Full stack Developer',
        //     company_name: 'Meta',
        //     icon: meta,
        //     iconBg: '#E6DEDD',
        //     date: 'Jan 2023 - Present',
        //     points: [
        //         'Developing and maintaining web applications using React.js and other related technologies.',
        //         'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
        //         'Implementing responsive design and ensuring cross-browser compatibility.',
        //         'Participating in code reviews and providing constructive feedback to other developers.',
        //     ],
    },
];

const testimonials = [
    //     {
    //         testimonial:
    //             'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    //         name: 'Sara Lee',
    //         designation: 'CFO',
    //         company: 'Acme Co',
    //         image: 'https://randomuser.me/api/portraits/women/4.jpg',
    //     },
    //     {
    //         testimonial:
    //             "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //         name: 'Chris Brown',
    //         designation: 'COO',
    //         company: 'DEF Corp',
    //         image: 'https://randomuser.me/api/portraits/men/5.jpg',
    //     },
    //     {
    //         testimonial:
    //             "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //         name: 'Lisa Wang',
    //         designation: 'CTO',
    //         company: '456 Enterprises',
    //         image: 'https://randomuser.me/api/portraits/women/6.jpg',
    //     },
];

const projects = [
    {
        name: 'Industrial talk poster',
        description:
            'KRGs development in sofotware also its market and demand for it is growing and im happy to be a software engnieer becouse i get to be part of the growth', // THis is Card Describtion
        tags: [
            {
                name: 'UTM',
                color: 'pink-text-gradient',
            },
            {
                name: 'QIU',
                color: 'blue-text-gradient',
            },
        ],
        image: poster,
        source_code_link:
            'https://drive.google.com/file/d/1KsrZLanpDPKL6PYrt4lUFufCKGcRVJVV/view?usp=drive_link',
    },
    {
        name: 'Industrial talk report',
        description: 'In the next four years, as a system developer, I will place a high value on lifelong learning, taking on as many projects as I can to hone my skills, and adopting a balanced approach to development by recognizing how important it is to maintain a work-life balance. The path to success in the constantly changing software development industry will be to take on opportunities while keeping a solid professional basis.',
        tags: [
            {
                name: 'UTM',
                color: 'pink-text-gradient',
            },
            {
                name: 'QIU',
                color: 'blue-text-gradient',
            },
        ],
        image: industry,
        source_code_link:
            'https://drive.google.com/file/d/1hBxQ-kEu3D8j6YZb1jhbZ0_EcsyuQCyD/view?usp=drive_link',
    },
    {
        name: 'Korek visit video',
        description: 'In this trip i learned about how communication works and how the operation is maintained behind the scenes. I also got to see the server room which was really cool how the wires were imbedded under the floor, i can say it was a memroble experience.',
        tags: [
            {
                name: 'UTM',
                color: 'pink-text-gradient',
            },
            {
                name: 'QIU',
                color: 'blue-text-gradient',
            },
        ],
        image: korek,
        source_code_link: 'https://www.youtube.com/watch?v=yIqDeFATna0',
    },
    {
        name: 'Industry Visit Newsletter',
        description: 'Going to Korek Telecom was really cool. We got to see how phones and internet stuff work behind the scenes. Learning about communication towers and how data gets sent and stored made me even more interested in this field.',
        tags: [
            {
                name: 'UTM',
                color: 'pink-text-gradient',
            },
            {
                name: 'QIU',
                color: 'blue-text-gradient',
            },
        ],
        image: industryimg,
        source_code_link:
            'https://drive.google.com/file/d/1ysq1BRoW0gH4w0CF9EvVuDKbkDsOZZwT/view?usp=drive_link',
    },
    {
        name: 'Design Thinking Report',
        description: 'My Reflection: Personal Goal: to be a successful software engineer and web app developer. Impact of Design Thinking: i think it will help us alot with approaching problems and emphasizing with clients so i see it as a posative impact. Improvement in this Field: i think by staying up to date with the latest tech and softwares available in the market and analyzing them and also working on my portfolio',
        tags: [
            {
                name: 'UTM',
                color: 'pink-text-gradient',
            },
            {
                name: 'QIU',
                color: 'blue-text-gradient',
            },
        ],
        image: scooter,
        source_code_link:
            'https://drive.google.com/file/d/1quIRCGhz8dLj1HPlACZoxOOdgvar1_PS/view?usp=drive_link',
    },
];

export { services, technologies, experiences, testimonials, projects };
