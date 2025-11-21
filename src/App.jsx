import Header from "./components/Header.jsx";
import Landing from "./components/Landing.jsx";
import { COLORS } from "./constants/colors.js";

export default function App() {
  return (
    <main className={`min-h-screen bg-[#F5D3C4]`}>

      <Header/>
      <Landing/>

    </main>
  )

}