import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

export default function App() {
  return (
    <main>
      <img className="absolute top-0 right-0 opacity-60 -z-1"
           src="/gradient.png"
           alt="gradient_img"/>
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg]">
      </div>

      <Header/>
      <Hero/>

    </main>
  )

}