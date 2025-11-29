import { STRINGS } from "../constants/strings.js";
import Animation from "./animations/Animation.jsx";
import CategoryName from "./texts/CategoryName.jsx";
import CategoryTitle from "./texts/CategoryTitle.jsx";

const Contact = () => {
  return (
    <main id="contact" className="flex flex-col">
      <div className='mt-10'>
        <div className="flex flex-col items-stretch justify-between max-w-2xl mx-auto">
          <CategoryName titleText={STRINGS.MENU_4}/>
          <div className="ml-[5%] mr-[5%] z-10 lg:mt-0">
            <div data-aos="fade-zoom-in"
                 data-aos-easing="ease-in-back"
                 data-aos-delay="100"
                 data-aos-offset="0"
                 className="bg-gray-50 p-4 border-2 border-gray-800 rounded-xl">

              <CategoryTitle titleText={STRINGS.CATEGORY_4_TITLE}/>

              <p className="text-base sm:text-lg tracking-wider text-gray-700">
                Puedes contactarme a mi correo electrónico: <strong><a
                href="mailto:diazulloabelen@gmail.com">diazulloabelen@gmail.com</a></strong> o a través de mis
                redes sociales.
                <div className='flex flex-row justify-center'>
                  <a href='https://github.com/labelenacha'>
                    <i className='bx bxl-github text-4xl mt-1 mr-2'></i>
                  </a>
                  <a href='https://www.linkedin.com/in/belendiazulloa/'>
                    <i className='bx bxl-linkedin-square text-4xl mt-1 mr-2'></i>
                  </a>
                  <a href='https://www.instagram.com/labelenacha/'>
                    <i className='bx bxl-instagram text-4xl mt-1 mr-2'></i>
                  </a>
                </div>
              </p>

              {/*bg-gray-300 text-black hover:text-white*/}
              {/*<div className="flex gap-4 mt-12">
              <MainButton isDark={true} text="GitHub Repository" icon="bx bxl-github"/>
              <MainButton isDark={false} text="Demo" icon="bx bx-server"/>
            </div>*/}
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-between">
          <Animation fileName='./models/oia/scene.gltf'
                     desiredSize={4}
                     rotateX={0.1}
                     rotateY={0.25}
                     posX={0.2}
                     posY={0.2}/>
        </div>
      </div>
    </main>
  );
}

export default Contact;