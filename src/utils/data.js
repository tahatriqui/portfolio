import anime from './Projects/prjt1.png'
import boat from './Projects/prjct2.png'
import facebook from './Projects/facebook.png'
import crud from './Projects/crud .png'

import front from "./skills/fe2.png"
import back from "./skills/be1.png"
import tools from "./skills/toolst.png"
import sftskill from "./skills/sfts.jpg"

export const SKILLS = [
    {
        title: "Frontend",
        icon: front,
        skills: [
            { skill: "HTML5", percentage: "80%" },
            { skill: "CSS3 (bootstrap)", percentage: "70%" },
            { skill: "JavaScript", percentage: "70%" },
            { skill: "React.js", percentage: "80%" },
        ],
    },
    {
        title: "Backend",
        icon: back,
        skills: [
            { skill: "PHP", percentage: "50%" },
            { skill: "LARAVEL", percentage: "60%" },
        ],
    }, {
        title: "Tools",
        icon: tools,
        skills: [
            { skill: "Git & GitHub", percentage: "80%" },
            { skill: "Visual Studio Code", percentage: "75%" },
            { skill: "Responsive Design", percentage: "65%" },
        ],
    }, {
        title: "Soft Skills",
        icon: sftskill,
        skills: [
            { skill: "problem-solving", percentage: "70%" },
            { skill: "Collaboration", percentage: "80%" },
            { skill: "Attention to Detail", percentage: "65%" },
        ],
    }
]

export const PROJECTS = [
    {
        title: "Anime project ",
        img: anime,
        link: "https://animetaha.netlify.app/",
        description: "On this React.js project, you can explore popular, upcoming, and currently airing anime. You have the opportunity to watch trailers, learn about characters, check the posting schedule, and discover the ranking for each anime. Additionally, for each character, you can view a collection of pictures."
    },
    {
        title: "Animated Boat",
        img: boat,
        link: "https://boatt.netlify.app/",
        description: "In this project, I utilized HTML, CSS, and JavaScript to create an animated boat. The animation features a visually appealing movement of pictures, contributing to an engaging and dynamic user experience."
    },
    {
        title: "facebook simulator",
        img: facebook,
        link: "https://sparkling-platypus-ccf5b6.netlify.app/",
        description: "it's a simple simulator of facebook  page build with html and css "
    },
    {
        title: "Crud",
        img: crud,
        link: "https://roaring-banoffee-a205ba.netlify.app//",
        description: "Discover the power of dynamic web interactions with this CRUD website built using JavaScript. Seamlessly manage your data as you create, read, update, and delete entries with ease. Experience a responsive and intuitive interface that allows for efficient data manipulation. Dive into a streamlined user experience, where JavaScript brings the website to life, enabling you to interact effortlessly with your data in real-time "

    },
]