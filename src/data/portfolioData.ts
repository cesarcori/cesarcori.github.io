// 1. Projects Data
export const PROJECTS = [
    {
        badge: "Flashcards",
        description: "An interactive learning application that uses dynamic flashcard decks to help users master any topic",
        url: "https://github.com/cesarcori/angular-flashcards",
        demo: "https://cesarcori.github.io/angular-flashcards/",
    },
    {
        badge: "System to manage university projects degree",
        description: "This project was developed with Django, Python and Bootstrap.",
        url: "https://github.com/cesarcori/etn1040_1",
        demo: ""
    },
    {
        badge: "Instagram clone",
        description: "I build a clone of instagram with laravel 9.",
        url: "https://github.com/cesarcori/instagram-clone-laravel",
        demo: ""
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
        "TailwindCSS",
        "Angular",
        "MaterialUI"
    ],
    backend: [
        "Node.js",
        "Express",
        "Python",
        "Flask",
        "FastAPI",
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
        "AWS",
        "Terraform",
        "Linux (Arch/Fedora/Ubuntu/Debian)"
    ]
} as const;