import { 
    SiHtml5, 
    SiCss3, 
    SiSass, 
    SiJavascript, 
    SiJquery, 
    SiBootstrap, 
    SiTailwindcss, 
    SiFramer, 
    SiGreensock,
    SiReact,
    SiNextdotjs,
    SiLaravel,
    SiPhp,
    SiMysql,
    SiMicrosoftsqlserver,
    SiWordpress,
    SiJoomla
} from "react-icons/si";

export const home = {
    title: "Hi! I'm Andrea Visentini, a front-end developer based in Ferrara, Italy",
    subtitle: "I turn ideas into reality, creating and animating websites and web apps from mockups. I have worked with agencies and as freelance in the last years.",
    getInTouch: "Currently I'm available for projects, job offers or hiring. So, get in touch.",
    about: "Hi everyone. I grew up with a passion for mathematic, electronics and information technology.",
    about_2: "Since 2017 I have been working as a web developer, creating Wordpress themes from scratch and web apps with React.",
    skillsTech: "I use the most famous libraries to build a performant and elegant site or app: Bootstrap, Tailwind and Material-UI for the style; Gsap and Framer motion for the animations.",
    skillsTech_2: "These are some of the technologies that I used during my works:"
}

const FE_BASE = [
    {
        skill: 'HTML5',
        icon: <SiHtml5 />,
        value: 90,
    }, 
    {
        skill: 'CSS3',
        icon: <SiCss3 />,
        value: 78,
    },
    {
        skill: 'SASS',
        icon: <SiSass />,
        value: 62,
    },
    {
        skill: 'Javascript',
        icon: <SiJavascript />,
        value: 75,
    },
    {
        skill: 'JQuery',
        icon: <SiJquery />,
        value: 72,
    },
]

const FE_LIBRARIES = [
    {
        skill: 'Bootstrap',
        icon: <SiBootstrap />,
        value: 90,
    }, 
    {
        skill: 'TailwindCSS',
        icon: <SiTailwindcss />,
        value: 84,
    },
    {
        skill: 'Framer motion',
        icon: <SiFramer />,
        value: 62,
    },
    {
        skill: 'GSAP',
        icon: <SiGreensock />,
        value: 70,
    },
]

const FRAMEWORKS = [
    {
        skill: 'React',
        icon: <SiReact />,
        value: 80,
    }, 
    {
        skill: 'Next',
        icon: <SiNextdotjs />,
        value: 70,
    },
    {
        skill: 'Laravel',
        icon: <SiLaravel />,
        value: 48,
    },
]

const BE_BASE = [
    {
        skill: 'PHP 8',
        icon: <SiPhp />,
        value: 70,
    }, 
    {
        skill: 'MySQL',
        icon: <SiMysql />,
        value: 65,
    },
    {
        skill: 'SQL Server',
        icon: <SiMicrosoftsqlserver />,
        value: 45,
    },
]

const CMS = [
    {
        skill: 'Wordpress',
        icon: <SiWordpress />,
        value: 74,
    }, 
    {
        skill: 'Joomla',
        icon: <SiJoomla />,
        value: 52,
    },
]

export const skills = [
    {
        list: FE_BASE,
        title: "Basics",
        description: "The languages used to build the front-end of the projects."
    }, 
    {
        list: FE_LIBRARIES,
        title: "Libraries",
        description: "The libraries used to create the style and the animations."
    }, 
    {
        list: FRAMEWORKS,
        title: "Frameworks",
        description: "The frameworks used to develop web app and sites."
    }, 
    {
        list: BE_BASE,
        title: "Back-end",
        description: "The languages used to build the back-end of the projects."
    }, 
    {
        list: CMS,
        title: "CMS",
        description: "The CMS used to build and deploy websites and e-commerce."
    }
]

export const projects = [
    {
        id: "edizioni-igpi",
        image: {
            path: "/images/igpi_home.png",
            width: "1600",
            height: "900",    
        },
        title: "Edizioni studio IGPI"
    }, 
    {
        id: "dpc-computer",
        image: {
            path: "/images/dpc_home.png",
            width: "1600",
            height: "900",
        },
        title: "DPC Computer"
    },
]
