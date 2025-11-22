import Header from "./components/Header.jsx";
import Landing from "./components/Landing.jsx";
import { COLORS } from "./constants/colors.js";
import styles from "./styles/fonts.module.css";

export default function App() {
  return (
    <main className={`min-h-screen bg-[#F5D3C4] ${styles.dynapuff}`}>

      <Header/>
      <Landing/>

    </main>
  )

}