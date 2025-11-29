import { STRINGS } from "../constants/strings.js";
import Animation from "./animations/Animation.jsx";
import CategoryName from "./texts/CategoryName.jsx";
import CategoryTitle from "./texts/CategoryTitle.jsx";

const Experience = () => {
  return (
    <main id="experience" className="flex flex-col">
      <div className='mt-10'>
        <CategoryName titleText={STRINGS.MENU_3}/>
        <div className="flex flex-col lg:flex-row items-center justify-between ">
          <div className="max-w-3xl ml-[5%] mr-[5%] z-10 lg:mt-0">
            <div data-aos="fade-zoom-in"
                 data-aos-easing="ease-in-back"
                 data-aos-delay="100"
                 data-aos-offset="0" className="bg-gray-50 p-4 border-2 border-gray-800 rounded-xl">

              <CategoryTitle titleText={STRINGS.CATEGORY_3_TITLE}/>

              <p className="text-base sm:text-lg tracking-wider text-gray-700 max-w-[50rem] lg:max-w-[60rem]">
                Desarrollo principalmente en SpringBoot (Java) y React (JavaScript); aun así, sé manejarme bien en
                frameworks como Laravel (PHP) y Django (Python); conozco cómo utilizar bases de datos SQL (PostgreSQL,
                SQLServer, MySQL) y NoSQL (MongoDB). Se utilizar Docker e integrar con pipelines de despliegue continuo.
                Tengo experiencia trabajando en Scrum y Kanban.
                <br/>
                <br/>
                Experiencia laboral:
                <br/>
                <ul className="list-disc list-inside">
                  <li>
                    Analista de programación, <strong>Travel Club Chile</strong> (Oct. 2021 - Actualidad)
                  </li>
                  <li>
                    Estudiante en prácticas, <strong>Evertec</strong> (Mar. 2021 - May. 2021)
                  </li>
                </ul>
                <br/>
                Experiencia académica:
                <br/>
                <ul className="list-disc list-inside">
                  <li>
                    Ingeniería Civil en Informática, <strong>Universidad de Concepción</strong> (Mar. 2015 - Dec. 2021)
                  </li>
                </ul>
              </p>

              {/*bg-gray-300 text-black hover:text-white*/}
              {/*<div className="flex gap-4 mt-12">
              <MainButton isDark={true} text="GitHub Repository" icon="bx bxl-github"/>
              <MainButton isDark={false} text="Demo" icon="bx bx-server"/>
            </div>*/}
            </div>
          </div>

          <Animation fileName='./models/smol_ame/scene.gltf'
                     desiredSize={2.4}
                     rotateX={0.33}
                     rotateY={-0.2}
                     posX={1.7}
                     posY={0.25}/>
        </div>
      </div>
    </main>
  );
}

export default Experience;