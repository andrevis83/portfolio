export const projects = [
    {
        id: "edizioni-igpi",
        description: "A website where every element is animated to improve the UX experience. The page transitions are used to accompany the user between the services offered by this agency.",
        cta: {
            href: "https://www.edizionistudioigpi.com/",
            text: "Visit website",
            next: "DPC Computer",
            nextId: "dpc-computer"
        },
        image: {
            path: "/images/igpi_home.png",
            width: "1600",
            height: "900",    
        },
        secondSection: {
            title: ["Styles and", "animations"],
            description: [
                "In this project I used several technologies to build this website. The contents are managed by wordpress, the style is based on custom CSS3 and Bootstrap.",
                "The animations are been implemented through Greensock library and its plugin scrollTrigger, the transition between the pages is managed by Barba.js.",
                "The result is a simple and dinamic website, with cool animations and a pleasant user experience."
            ],
        },
        subtitle: "Video and digital agency website",
        title: "Edizioni studio IGPI",
        video: "/videos/igpi-video.mp4"
    }, 
    {
        id: "dpc-computer",
        description: "A web application to manage the backoffice of the shop. The interfaces are simple but efficents and follow the material design's guidelines. ",
        cta: {
            href: "mailto:andrea.visentini83@gmail.com",
            text: "Request demo",
            next: "Edizioni studio IGPI",
            nextId: "edizioni-igpi"
        },
        image: {
            path: "/images/dpc_home.png",
            width: "1600",
            height: "900",
        },
        secondSection: {
            title: ["An efficent", "backoffice"],
            description: [
                "In this project I used several technologies to build the front-end of this web application. ",
                "The business logic is based on React.js, the presentation logic is develop with the library Material-UI and Framer motion. ",
                "The result is a dinamic web application, ease to use and with a pleasant user experience."
            ],
        },
        subtitle: "Backoffice web application",
        title: "DPC Computer",
        video: "/videos/dpc-video.mp4"
    },
]