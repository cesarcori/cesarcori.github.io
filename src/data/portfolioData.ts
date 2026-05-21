// 1. Projects Data
export const PROJECTS = [
    {
        badge: "System to manage university projects degree",
        description: "This project was developed with Django, Python and Bootstrap.",
        url: "https://github.com/cesarcori/etn1040_1",
    },
    {
        badge: "Instagram clone",
        description: "I build a clone of instagram with laravel 9.",
        url: "https://github.com/cesarcori/instagram-clone-laravel",
    },
] as const;

export const SKILLS = {
    frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TypeScript",
        "Bootstrap",
        "Vue.js",
        "Quasar.js",
        "Astro",
        "TailwindCSS"
    ],
    backend: [
        "Node.js",
        "Express",
        "Python",
        "Flask",
        "Java",
        "Django",
        "Laravel"
    ],
    infrastructure: [
        "Git",
        "Bash",
        "Docker",
        "PostgreSQL",
        "SQLite",
        "Postman",
        "Linux (Arch/Fedora/Ubuntu/Debian)"
    ]
} as const;