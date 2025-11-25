import 'boxicons/css/boxicons.min.css';
import Animation from "./animations/Animation.jsx";
import { STRINGS } from "../constants/strings.js";
import CategoryTitle from "./texts/CategoryTitle.jsx";

const Aboutme = () => {
  return (
    <main className="flex flex-col">
      <CategoryTitle titleText={STRINGS.MENU_2}/>
      <div className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">

        <Animation fileName='/models/smoller_gura/scene.gltf'
                   desiredSize={2}
                   rotateX={0.2}
                   rotateY={0.5}
                   posX={1.2}
                   posY={0}/>

        <div className="max-w-3xl ml-[5%] mr-[5%] z-10 lg:mt-0">
          <div className="bg-gray-50 p-4 border-2 border-gray-800 rounded-xl">

            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wider my-8 text-gray-800">
              Aquí explico quien soy
            </h1>

            <p className="text-base sm:text-lg tracking-wider text-gray-700 max-w-[50rem] lg:max-w-[60rem]">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
              el
              texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que
              se
            </p>

            {/*bg-gray-300 text-black hover:text-white*/}
            {/*<div className="flex gap-4 mt-12">
            <MainButton isDark={true} text="GitHub Repository" icon="bx bxl-github"/>
            <MainButton isDark={false} text="Demo" icon="bx bx-server"/>
          </div>*/}
          </div>
        </div>

      </div>
    </main>
  );
}

export default Aboutme;
