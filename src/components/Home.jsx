import 'boxicons/css/boxicons.min.css';
import MainButton from "./buttons/MainButton.jsx";
import Animation from "./animations/Animation.jsx";
import { STRINGS } from "../constants/strings.js";
import CategoryName from "./texts/CategoryName.jsx";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";
import CategoryTitle from "./texts/CategoryTitle.jsx";

const Home = () => {

  useEffect(() => {
    Aos.init({
      duration: 600,
      once: true,
    })
  }, []);

  return (
    <main id="home" className=" flex flex-col">
      <div className='mt-10'>
        <CategoryName titleText={STRINGS.MENU_1}/>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-3xl ml-[5%] mr-[5%] z-10 lg:mt-0">
            <div data-aos="fade-zoom-in"
                 data-aos-easing="ease-in-back"
                 data-aos-delay="100"
                 data-aos-offset="0"
                 className="bg-gray-50 p-4 border-2 border-gray-800 rounded-xl">

              <CategoryTitle titleText={STRINGS.CATEGORY_1_TITLE}/>

              <p className="text-base sm:text-lg tracking-wider text-gray-700 max-w-[50rem] lg:max-w-[60rem]">
                En este sitio encontrarás información sobre mí, mi experiencia y cómo contactarme. ¡Disfruta de este
                portafolio!
              </p>

              {/*bg-gray-300 text-black hover:text-white*/}
              <div className="flex gap-4 mt-12">
                <MainButton isDark={true} text="Repositorio GitHub" icon="bx bxl-github"
                            link='https://github.com/labelenacha/labelenacha-front'/>
                <MainButton isDark={false} text="Linkedin" icon="bx bxl-linkedin-square" link='https://www.linkedin.com/in/belendiazulloa/'/>
              </div>
            </div>
          </div>

          <Animation fileName='./models/pusheen_cat_ramen/scene.gltf'
                     desiredSize={4.5}
                     rotateX={0.4}
                     rotateY={-0.65}
                     posX={1}
                     posY={-1}/>

        </div>
      </div>
    </main>
  );
}

export default Home;