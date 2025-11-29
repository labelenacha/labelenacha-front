import 'boxicons/css/boxicons.min.css';
import Animation from "./animations/Animation.jsx";
import { STRINGS } from "../constants/strings.js";
import CategoryName from "./texts/CategoryName.jsx";
import CategoryTitle from "./texts/CategoryTitle.jsx";

const Aboutme = () => {
  return (
    <main id="aboutme" className="flex flex-col">
      <div className='mt-10'>

        <CategoryName titleText={STRINGS.MENU_2}/>
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">

          <Animation fileName='./models/smoller_gura/scene.gltf'
                     desiredSize={2}
                     rotateX={0.2}
                     rotateY={0.5}
                     posX={1.2}
                     posY={0}/>

          <div className="max-w-3xl ml-[5%] mr-[5%] z-10 lg:mt-0">
            <div data-aos="fade-zoom-in"
                 data-aos-easing="ease-in-back"
                 data-aos-delay="100"
                 data-aos-offset="0" className="bg-gray-50 p-4 border-2 border-gray-800 rounded-xl">

              <CategoryTitle titleText={STRINGS.CATEGORY_2_TITLE}/>

              <p className="text-base sm:text-lg tracking-wider text-gray-700 max-w-[50rem] lg:max-w-[60rem]">
                Tengo 29 años y soy Chilena. Estudie Ingeniería Civil en Informática en la UdeC y actualmente me
                desempeño como desarrolladora a tiempo completo.
                <br/>
                Siempre busco mantenerme al tanto sobre nuevas tecnologías y emprender nuevos desafíos que me permitan
                desarrollame profesionalmente. En mi tiempo libre disfruto de jugar videojuegos, pasear en parques y
                pasar tiempo con mi familia.
              </p>

              {/*bg-gray-300 text-black hover:text-white*/}
              {/*<div className="flex gap-4 mt-12">
            <MainButton isDark={true} text="GitHub Repository" icon="bx bxl-github"/>
            <MainButton isDark={false} text="Demo" icon="bx bx-server"/>
          </div>*/}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Aboutme;
