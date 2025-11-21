import 'boxicons/css/boxicons.min.css';
import MainButton from "./MainButton.jsx";
import Animation from "./Animation.jsx";

const Landing = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">

      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        <div
          className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i className="bx bx-diamond"></i>
            Introducing
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          Email
          <br/>
          Dev
        </h1>

        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el
          texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se
        </p>

        {/*bg-gray-300 text-black hover:text-white*/}
        <div className="flex gap-4 mt-12">
          <MainButton isDark={true} text="GitHub Repository" icon="bx bxl-github"/>
          <MainButton isDark={false} text="Demo" icon="bx bx-server"/>
        </div>
      </div>

      <Animation />

    </main>
  );
}

export default Landing;