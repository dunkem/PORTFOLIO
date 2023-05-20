import { projects } from "../../data";
import Header from "../Header";
import { AiFillGithub } from "react-icons/ai";
import { Element } from "react-scroll";


const links = [
  'https://github.com/dunkem',
  
];
const Portfolio = () => {
  return (
    <Element id="portfolio" className="bg-secondaryBackground pt-10 pb-12  lg:pt[40px] lg:pb[40px]">
      <div className="container mx-auto">
        <Header title={"My Latest Projects"} />
        <div className="flex flex-wrap">
          {projects.map((projectItem) => (
            <div className="cursor-pointer w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
              <div className="rounded-lg bg-white p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <figure className="mb-2 h-height400">

           <a href={projectItem.link} target="_blank">
                  <img
                
                    src={projectItem.image}
                    alt={projectItem.title}
                    className="max-h-full ml-auto mr-auto"
                  />
                  </a>
                  
                </figure>
                
                <div className="rounded-lg p-4 bg-gray-700 flex flex-col">
                  <div>
                    <h5 className="text-textColor text-2xl font-bold leading-none">{projectItem.title}</h5>
                    <p className="text-xl pt-4 text-textColor leading-none">{projectItem.subtitle}</p>
                  </div>
                  
                  <div className="flex items-center mt-3">
                  
                  <a>
                    <button
                  
                      type="button" 
                      className="rounded-full bg-red-900 text-textColor hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-200"
                      onClick={() => window.open(links[0], '_blank')}
                    >
                      
                      <AiFillGithub
                        size={30}
                        className="stroke-current m-auto" 
                        
                      />
                    </button>
                    </a>
                  </div>
                  </div>
              </div>
            </div>
            ))}
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
