import {
  SiSimpleanalytics,
  SiMicrostrategy,
  SiGooglemarketingplatform,
} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { FaBootstrap, FaCss3, FaDatabase, FaFacebook, FaFileExcel, FaGithub, FaHtml5, FaInstagram, FaJava, FaJs, FaLanguage, FaLinkedin, FaMicrochip, FaMicrosoft, FaNodeJs, FaPython, FaReact, FaSass, FaSquareFull, FaTwitter, FaWhatsapp } from "react-icons/fa";
import image1 from "../images/proyecto1.png"; 
import image2 from "../images/proyectojs.png";
import image3 from "../images/proyecto3.png";
import image4 from "../images/proyecto4.png";




export const navigation = [
  { name: "Home", href: "#", id: "home" },
  { name: "About", href: "#", id: "about" },
  { name: "Skills", href: "#", id: "services" },
  { name: "Portfolio", href: "#", id: "portfolio" },
  
];

export const aboutMeData = [
  {
    id: 1,
    bio: "Hello!, I am a passionate Full Stack developer with a strong commitment to growth in the field of web development. I am excited to face exciting challenges and expand my skills in innovative projects. With solid knowledge in frontend and backend technologies, I focus on offering efficient and user-centric solutions. Through personal projects and collaborations, I have developed skills in design, implementation, and problem solving.",
  },
  {
    id: 2,
    bio: "I am always open to learn new technologies and keep up to date with the latest trends. My approach is based on understanding the needs of clients to provide personalized and quality solutions. I am excited about the opportunities in the field of web development and committed to growing professionally. My determination and work ethic drive me to overcome obstacles and learn from each experience. If you are looking for a passionate and dedicated Full Stack developer, I am ready to face challenges and grow in your team. I am looking forward to gaining experience on larger projects while continuing to develop my skills in web development.",
  },
];

export const counterData = [
 
  {
    id: "feedbackCounter",
    title: "",
    measurement: "",
  },
  
  {
    id: "projectsCounter",
    title: "",
    link: "%",
  },
];

export const servicesData = [
  {
    title: "HTML5", 
    subtitle:
      "",
  },
  {
    title: "CSS3",
    subtitle:
      "",
  },
  {
    title: "BOOSTRAP",
    subtitle:
      "",
  },
  {
    title: "SASS",
    subtitle:
      "",
  },
  {
    title: "JAVASCRIPT",
    subtitle:
      "",
  },
  {
    // icon: <MdOutlineDeveloperMode color={getCurrentColor} size={60} />,
    title: "NODE.JS",
    subtitle:
      "",
  },
  {
    title: "REACT.JS",
    subtitle:
      "",
  },
  {
    title: "GIT HUB",
    subtitle:
      "",
  },
  {
    title: "MONGODB",
    subtitle:
      "",
  },
  {
    title: "TECHNICAL SUPPORT AND PC MAINTENANCE",
    subtitle:
      "",
  },
  {
    title: "PHYTOM",
    subtitle: "IN PROGRESS...",
  },
  {
    title: "SQL",
    subtitle: "IN PROGRESS...",
  },
  {
    title: "PACK OFFICE",
    subtitle: "",
  },
  {
    title: "LANGUAGES",
    subtitle: "Advanced portuguese | Intermediate English",
  },
  

];

export const getIcons = (getCurrentColor) => {
  return [
    <FaHtml5 size={60} color={getCurrentColor} />, 
    <FaCss3 size={60} color={getCurrentColor} />,
    <FaBootstrap size={60} color={getCurrentColor} />,
    <FaSass size={60} color={getCurrentColor} />,
    <FaJs color={getCurrentColor} size={60} />,
    <FaNodeJs color={getCurrentColor} size={60} />,
    <FaReact color={getCurrentColor} size={60} />,
    <FaGithub size={60} color={getCurrentColor} />,
    <FaDatabase size={60} color={getCurrentColor} />,
    <FaMicrochip size={60} color={getCurrentColor} />,
    <FaPython size={60} color={getCurrentColor} />,
    <FaDatabase size={60} color={getCurrentColor} />,
    <FaFileExcel size={60} color={getCurrentColor} />,
    <FaLanguage size={60} color={getCurrentColor} />,
  ];
};

export const projects = [
  {
    image: image1,
    title: "DIETETICA HOLISTIC",
    subtitle: "Page created with html5, css3, Bootstrap, processed with SASS, FlexBox and GRIDS application, Servers and SEO, GitHub.",
    link: "https://dieteticaholistic.netlify.app/",
    githubLink: "https://github.com/dunkem/PROYECTO-FINAL-DESARROLO-WEB-CODERHOUSE",
  },
  {
    image: image2, 
    title: "DIETETICA HOLISTIC V2",
    subtitle: "Page created with Html5, Css3, JavaScript, Ajax and Fetch, Jquery, Boostrap, processed with SASS, Node.js and GitHub.",
    link: "https://dieteticaholisticjs.netlify.app/",
    githubLink: "https://github.com/dunkem/PROYECTO-FINAL-JS-CODERHOUSE",
  },
  {
    image: image3, 
    title: "ORIGINAL NIKE",
    subtitle: "Page created with ReactJs.",
    link: "https://originalnikereactjs.netlify.app/",
    githubLink: "https://github.com/dunkem/PROYECTO-REACTJS-CODERHOUSE",
  },
  {
    image: image4, 
    title: "META CLONE",
    subtitle: "Page created with ReactJs in which the application allows to connect with a Firestore database, I also use Tailwindcss.",
    link: "https://clonemeta.netlify.app/",
    githubLink: "https://github.com/dunkem/PROYECTOREACTJS2",
  },
];


export const contactControls = [
  {
    id: "name",
    placeholder: "Your Name",
    name: "user_name",
    type: "text",
    inputType: "input",
    className:
      "w-full bg-black text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",
    divClassName: "",
  },
  {
    id: "email",
    placeholder: "Your Email Address",
    type: "text",
    inputType: "input",
    name: "user_email",
    className:
      "w-full bg-black text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",
    divClassName: "mt-8",
  },
  {
    id: "message",
    placeholder: "Your Message",
    type: "text",
    inputType: "textArea",
    name: "message",
    divClassName: "mt-8",
    className:
      "w-full sm:h-[6.5rem] bg-black lg:h-[14.5rem] md:h-[7.5rem]  text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",
  },
];

const footerLinks = [
  "https://www.linkedin.com/in/douglasdunke/",
  "https://github.com/dunkem?tab=repositories",
  "https://web.whatsapp.com/send?phone=541159097342",
  "https://www.instagram.com/douglas.dunke/"
];

export const footerIcons = [
  <a href={footerLinks[0]} target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={"25px"} />
  </a>,
  <a href={footerLinks[1]} target="_blank" rel="noopener noreferrer">
    <FaGithub size={"25px"} />
  </a>,
  <a href={footerLinks[2]} target="_blank" rel="noopener noreferrer">
    <FaWhatsapp size={"25px"} />
  </a>,
  <a href={footerLinks[3]} target="_blank" rel="noopener noreferrer">
    <FaInstagram size={"25px"} />
  </a>
];

const links = [
  'https://www.github.com',
  'https://www.twitter.com',
  'https://www.linkedin.com',
  'https://www.instagram.com'
];




