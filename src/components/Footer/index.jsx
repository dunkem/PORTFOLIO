import { scroller } from "react-scroll";
import { footerIcons, navigation } from "../../data";

const Footer = () => {

  function handleNavigate(id){
    scroller.scrollTo(id, {
     smooth : true,
     duration :1000
    })
   }

  return (
    <div className="bg-primaryBackground">
      <div className="px-6 py-14 mx-auto space-y-8 overflow-hidden sm:px-8 lg:px-8 max-w-screen-xl">
        <ul className="flex flex-wrap justify-center -mx-8 -my-2 list-none">
          {navigation.map((item) => (
            <li onClick={()=> handleNavigate(item.id)} className="px-5 py-2 cursor-pointer leading-6 text-textSecondary">
                {item.name}
            </li>
          ))}
        </ul>
        <ul className="flex justify-center mt-8 space-x-20">
            {
                footerIcons.map(iconItem=> <li className="text-textColor">{iconItem}</li>)
            }

        </ul>
        <p className="mt-8 leading-6 text-center text-textSecondary">
            2023 Douglas Dunke. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
