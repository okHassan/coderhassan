import {
    mobile,
    backend,
    creator,
    web,
    meta,
    starbucks,
    tesla,
    shopify,
    bankwebsite,
    airbnb,
    restaurent,
    restaurentold,
    eduweb,
    tourly,
    zepto,
    // daraz,
    // google,
    // business,
    projectmeta,
    neondashboard
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Javascript",
        parentage: 80,
        color: "#EAD41C"
    },
    {
        name: "Typescript",
        parentage: 75,
        color: "#0074C2"
    },
    {
        name: "React JS",
        parentage: 80,
        color: "#0E2368"
    },
    {
        name: "Next JS",
        parentage: 70,
        color: "#70CAC6"
    },
    {
        name: "HTML",
        parentage: 90,
        color: "#D84924"
    },
    {
        name: "CSS",
        parentage: 85,
        color: "#2449D8"
    },
    {
        name: "Bootstrap",
        parentage: 75,
        color: "#6D11EA"
    },
    {
        name: "Tailwind CSS",
        parentage: 95,
        color: "#1BBDAF"
    },
    {
        name: "Node JS",
        parentage: 75,
        color: "#78B465"
    },
    {
        name: "Express JS",
        parentage: 85,
        color: "#78B465"
    },
    {
        name: "Mongo DB",
        parentage: 75,
        color: "#1C8333"
    },
    {
        name: "MySQL",
        parentage: 70,
        color: "#005C83"
    },
    {
        name: "React Native",
        parentage: 70,
        color: "#4F58F2"
    },
    {
        name: "FireBase",
        parentage: 80,
        color: "#FFCB2B"
    },
    {
        name: "Socket IO",
        parentage: 65,
        color: "#21AF90"
    },
    {
        name: "Figma",
        parentage: 65,
        color: "#9D56F7"
    },
    {
        name: "Three JS",
        parentage: 70,
        color: "#102EA8"
    },
    {
        name: "Blender",
        parentage: 75,
        color: "#E37200"
    },
]

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Banking App",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "reactjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        link: "https://banking-app.vercel.app/",
        image: bankwebsite,
        source_code_link: "https://github.com/Hassanahmed006/modern-react-bank-website",
    },
    {
        name: "Project Meta",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "reactjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        link: "https://project-meta.netlify.app/",
        image: projectmeta,
        source_code_link: "https://github.com/Hassanahmed006/project-meta",
    },
    {
        name: "modern dashboard",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "reactjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        link: "https://admin-dashboard-1132205.netlify.app/",
        image: neondashboard,
        source_code_link: "https://github.com/Hassanahmed006/react-admin-dashboard",
    },
    {
        name: "Tourly",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "reactjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        link: "https://fancy-semolina-574b3c.netlify.app/",
        image: tourly,
        source_code_link: "https://github.com/Hassanahmed006/Tourly",
    },
    {
        name: "Restaurent Website",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "reactjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        link: "https://restaurent-website-66.netlify.app",
        image: restaurent,
        source_code_link: "https://github.com/Hassanahmed006/Responsive-restaurant-website",
    },
    {
        name: "Airbnb",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "reactjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        link: "https://airbnb-by-hassan.netlify.app",
        image: airbnb,
        source_code_link: "https://github.com/Hassanahmed006/Airbnb-Clone",
    },
    {
        name: "Restaurent",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "reactjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        link: "https://restaurant-by-hassan.netlify.app",
        image: restaurentold,
        source_code_link: "https://github.com/Hassanahmed006/Restaurant-Website",
    },
    {
        name: "Zeppto",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "reactjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        link: "https://zeppto-by-hassan.netlify.app",
        image: zepto,
        source_code_link: "https://github.com/Hassanahmed006/zepto-clone",
    },
    {
        name: "Project Meta",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "reactjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        link: "https://effervescent-lily-cba905.netlify.app",
        image: eduweb,
        source_code_link: "https://github.com/Hassanahmed006/eduweb",
    },
];

export { services, technologies, experiences, testimonials, projects };