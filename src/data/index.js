import {
  SiSimpleanalytics,
  SiMicrostrategy,
  SiGooglemarketingplatform,
} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { FaBootstrap, FaCss3, FaDatabase, FaFacebook, FaGithub, FaHtml5, FaInstagram, FaJava, FaJs, FaLinkedin, FaNodeJs, FaReact, FaSass, FaTwitter, FaWhatsapp } from "react-icons/fa";
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
    bio: "Hello! I am a passionate Front-End developer with an unquenchable thirst for knowledge and a love for the world of technology. My main focus is creating engaging and functional web experiences for users. With a strong foundation in HTML, CSS and JavaScript, I can bring designs to life using frameworks like React.js and tools like Bootstrap and Sass to ensure a professional look and clean coding. My thirst for knowledge has led me to broaden my experience in web development and embark on learning Full Stack skills. Currently, I am immersed in the study of Node.js, which allows me to build more complete and scalable web applications. I firmly believe in the importance of staying up to date with the latest technologies and trends in web development, and I am excited about the opportunities that await me to expand my skills.",
  },
  {
    id: 2,
    bio: "A passionate and self-taught person who is always looking for challenges and growth opportunities. I love collaborating in teams and learning from other talented developers, as I strongly believe in the importance of sharing knowledge and experiences to achieve exceptional results. I am always open to new ideas and approaches, and I am willing to push myself to overcome obstacles and achieve success. My ultimate goal is to grow as a developer and contribute to innovative projects that have a positive impact on people's lives. I am excited for the future of technology and ready to face new challenges and continually learn to improve my skills. I am always willing to dive into exciting new projects and embrace opportunities that allow me to continue advancing in my career.",
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
  ];
};

export const projects = [
  {
    image: image1,
    title: "DIETETICA HOLISTIC",
    subtitle: "Page created with html5, css3, Bootstrap, processed with SASS, FlexBox and GRIDS application, Servers and SEO, GitHub.",
    link: "https://dieteticaholistic.netlify.app/",
    link2: "https://dieteticaholisticjs.netlify.app/"
  },
  {
    image: image2, 
    title: "DIETETICA HOLISTIC V2",
    subtitle: "Page created with Html5, Css3, JavaScript, Ajax and Fetch, Jquery, Boostrap, processed with SASS, Node.js and GitHub.",
    link: "https://dieteticaholisticjs.netlify.app/"
  },
  {
    image: image3, 
    title: "ORIGINAL NIKE",
    subtitle: "Page created with ReactJs.",
    link: "https://originalnikereactjs.netlify.app/"

  },
  {
    image: image4, 
    title: "META CLONE",
    subtitle: "Page created with ReactJs in which the application allows to connect with a Firestore database, I also use Tailwindcss.",
    link: "https://clonemeta.netlify.app/"
  },
];


export const contactControls = [
  {
    id: "name",
    placeholder: "Your Name",
    name: "from_name",
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
    name: "from_email",
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




