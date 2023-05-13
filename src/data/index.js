import {
  SiSimpleanalytics,
  SiMicrostrategy,
  SiGooglemarketingplatform,
} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { FaCss3, FaFacebook, FaGithub, FaHtml5, FaInstagram, FaJava, FaJs, FaLinkedin, FaNodeJs, FaReact, FaTwitter, FaWhatsapp } from "react-icons/fa";
import image1 from "../images/proyecto1.png";
import image2 from "../images/proyectojs.png";
import image3 from "../images/proyecto3.png";
import image4 from "../images/proyecto4.png";



export const navigation = [
  { name: "Home", href: "#", id: "home" },
  { name: "About", href: "#", id: "about" },
  { name: "Skills", href: "#", id: "skills" },
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
    id: "experienceCounter",
    title: "Years of experience",
    measurement: "",
  },
  {
    id: "githubStarsCounter",
    title: "Stars on GitHub",
    measurement: "k+",
  },
  {
    id: "feedbackCounter",
    title: "Positive feedback",
    measurement: "%",
  },
  {
    id: "projectsCounter",
    title: "Projects Completed",
    measurement: "%",
  },
];

export const servicesData = [
  {
    title: "Business Stratagy",
    subtitle:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    title: "Marketing & Reporting",
    subtitle:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    title: "Website Development",
    subtitle:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    // icon: <MdOutlineDeveloperMode color={getCurrentColor} size={60} />,
    title: "Website Development",
    subtitle:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    title: "Website Development",
    subtitle:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    title: "Marketing & Reporting",
    subtitle:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
];

export const getIcons = (getCurrentColor) => {
  return [
    <FaHtml5 size={60} color={getCurrentColor} />,
    <FaCss3 size={60} color={getCurrentColor} />,
    <FaJs color={getCurrentColor} size={60} />,
    <FaNodeJs color={getCurrentColor} size={60} />,
    <FaReact color={getCurrentColor} size={60} />,
    <FaGithub size={60} color={getCurrentColor} />,
  ];
};

export const projects = [
  {
    image: image1,
    title: "DEVELOPMENT",
    subtitle: "Getting tickets to the big show",
  },
  {
    image: image2,
    title: "DESIGN",
    subtitle: "Getting tickets to the big show",
  },
  {
    image: image3,
    title: "MARKETING",
    subtitle: "Getting tickets to the big show",
  },
  {
    image: image4,
    title: "ANALYTICS",
    subtitle: "Getting tickets to the big show",
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

export const footerIcons = [
  <FaLinkedin size={"25px"} />,
  <FaGithub size={"25px"} />,
  <FaWhatsapp size={"25px"} />,
  <FaInstagram size={"25px"} />,
];
