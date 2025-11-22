import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import { COLORS } from "./constants/colors.js";
import styles from "./styles/fonts.module.css";
import Aboutme from "./components/Aboutme.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <main className={`min-h-screen bg-[#F5D3C4] ${styles.dynapuff}`}>

      <Header/>
      <Home/>
      <Aboutme/>
      <Experience/>
      <Contact/>
    </main>
  )

}