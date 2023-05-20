import Header from "../Header";
import image1 from "../../images/perfil1.jpg";
import { aboutMeData } from "../../data";

import { counterData } from "../../data";
import { Element } from "react-scroll";

const generarCV = () => {
  const rutaCV = 'https://drive.google.com/file/d/1evyQcg-feFDhKLxUqeS_-G5zuiU7KJu3/view?usp=sharing';
  window.open(rutaCV, '_blank');
};

const CounterItem = ({ title, counter, measurement }) => {
  return (
    <div className="mb-20 flex flex-col sm:mb-0">
      <h2 className="text-4xl text-center text-textColor mb-2">
        {counter} {measurement}
      </h2>
      <span className="text-md text-center text-textColor">{title}</span>
    </div>
  );
};

const About = () => {
  


  return (
    <Element id="about" className="bg-secondaryBackground pl-3 pr-3 pt-10 pb-12 lg:pt[40px] lg:pb[40px] ">
      <div className="container mx-auto">
        <Header title={"About Me"} />
        <div className="block sm:flex sm:gap-10">
          <div className="sm:overflow-auto w-full lg:w-3/4 sm:w-2/4 md:w-2/4 text-left">
            <img
              src={image1}
              className="rounded-lg "
              alt="About Me Image"
            />
            
          </div>
          <div>
      <button onClick={generarCV}
    className="uppercase text-xl py-4 pr-5 pl-5 font-bold tracking-wide bg-bgRed text-gray-100  rounded-lg  focus:outline-none focus:shadow-outline"
    >Download CV</button>
      
    </div>
          

          <div className="sm:overflow-auto mt-10 sm:mt-0 md:mt-0 w-full lg:w-3/4 sm:w-2/4 md:w-2/4 text-left">
            {aboutMeData.map((bioDataItem) => (
              <p
                key={bioDataItem.id}
                className="mb-4 text-textSecondary text-lg"
              >
                {bioDataItem.bio}
              </p>
              
            ))}
            <div className="mt-10 sm:mt-20 shadow-sm">
              <div className="container mx-auto py-2 block sm:flex sm:justify-between items-center">
                {counterData.map((item) => (
                  <CounterItem
                    title={item.title}
                    counter={<span id={item.id} />}
                    measurement={item.measurement}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
