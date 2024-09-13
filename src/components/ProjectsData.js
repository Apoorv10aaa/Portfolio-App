import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  // BiLogoTypescript,
} from "react-icons/bi";
import { TbApi, TbDatabase } from "react-icons/tb";
import { SiElasticsearch } from "react-icons/si";
// import { TiHtml5 } from "react-icons/ti";

const ProjectsData = [
  // {
  //   id: "1",
  //   name: "Movie Website",
  //   image: "./IMDB.png",
  //   icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
  //   description:
  //     "This website provides information about popular , top-rated and upcoming movies.",
  //   github: "https://github.com/VijayKumarReddyTalakola/IMDB",
  //   demo: "https://imdb-rho.vercel.app",
  // },
  {
    id: "2",
    name: "Ecommerce Website",
    image: "./ecom.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description: "A simple, creative, responsive website for e-commerce",
    github: "https://github.com/Apoorv10aaa/ECommerce-website",
    demo: "https://e-shopping-webapp.netlify.app",
  },
  // {
  //   id: "3",
  //   name: "Chat Application",
  //   image: "./chatapp.png",
  //   icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
  //   description:
  //     "This chat application provides an interface to the users to interact with their friends.",
  //   github: "https://github.com/VijayKumarReddyTalakola/Chat-App",
  //   demo: "https://vchat4whisperchat.vercel.app",
  // },
  // {
  //   id: "4",
  //   name: "Expense Tracker",
  //   image: "./expense-tracker.png",
  //   icons: [
  //     BiLogoMongodb,
  //     SiExpress,
  //     BiLogoReact,
  //     BiLogoRedux,
  //     BiLogoTailwindCss,
  //   ],
  //   description:
  //     "This application provides an interface for users to track their expenses .",
  //   github: "https://github.com/VijayKumarReddyTalakola/Expense-Tracker",
  //   demo: "https://vtrack-expense.vercel.app",
  // },
  {
    id: "5",
    name: "Web Music Player",
    image: "./musicPlayer.png",
    icons: [
      BiLogoReact,
      BiLogoRedux,
      BiLogoTailwindCss,
      BiLogoCss3,
      SiElasticsearch,
    ],
    description:
      "Amuse is a fully-functional, user-friendly, and secure web-based music player application.",
    github: "https://github.com/Apoorv10aaa/WebMusicPlayer",
    demo: "",
  },
  {
    id: "6",
    name: "Personal Blog Application",
    image: "./blogApp.png",
    icons: [BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
    description:
      "Personalized blog app with responsive design with a clean and intuitive layout.",
    github: "https://github.com/Apoorv10aaa/Personal-Blog-App",
    demo: "https://blog-app-personal.netlify.app/",
  },
];

export default ProjectsData;
