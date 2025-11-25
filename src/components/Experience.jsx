import { STRINGS } from "../constants/strings.js";
import Animation from "./animations/Animation.jsx";
import CategoryTitle from "./texts/CategoryTitle.jsx";

const Experience = () => {
  return (
    <main className="flex flex-col">
      <CategoryTitle titleText={STRINGS.MENU_3}/>
      <div className="flex flex-col lg:flex-row items-center justify-between ">
        <div className="max-w-3xl ml-[5%] mr-[5%] z-10 lg:mt-0">
          <div className="bg-gray-50 p-4 border-2 border-gray-800 rounded-xl">

            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wider my-8 text-gray-800">
              Aquí va todo de mi experiencia
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

        <Animation fileName='/models/smol_ame/scene.gltf'
                   desiredSize={2.4}
                   rotateX={0.33}
                   rotateY={-0.2}
                   posX={1.7}
                   posY={0.25}/>

      </div>
    </main>
  );
}

export default Experience;