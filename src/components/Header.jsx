import React from "react";
import 'boxicons/css/boxicons.min.css';
import MenuEntry from "./buttons/MenuEntry.jsx";
import { STRINGS } from "../constants/strings.js";
import styles from "../styles/fonts.module.css";

const Header = () => {

  const toggleMenu = () => {
    const menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  }

  return (
    /*    <header className="sticky top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm">*/
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#F5D3C4] backdrop-blur-sm border-b-2 border-gray-800">
      <div className="relative flex justify-between items-center py-6 px-4 lg:px-20">

        <a href='#' className="flex items-center gap-3">
          <h1 className={`text-3xl md:text-4xl lg:text-5xl text-gray-800 m-0 ${styles.sprinklescolors}`}>
            {STRINGS.TITLE}
          </h1>
        </a>

        <nav className="hidden md:flex items-center gap-12">
          <MenuEntry link="#home" text={STRINGS.MENU_1}/>
          <MenuEntry link="#aboutme" text={STRINGS.MENU_2}/>
          <MenuEntry link="#experience" text={STRINGS.MENU_3}/>
          <MenuEntry link="#contact" text={STRINGS.MENU_4}/>
        </nav>

        {/*mobile*/}
        <button onClick={toggleMenu}
                className="md:hidden text-3xl p-2 z-50 text-gray-800">
          <i className="bx bx-menu"></i>
        </button>

        <div id="mobileMenu"
             className="hidden mr-2 ml-2 fixed top-22 right-0 p-5
            md:hidden z-40 border-2 rounded-xl border-gray-800
             bg-gray-50 backdrop-blur- md left-auto w-max">
          <nav className="flex flex-col gap-6 items-start">
            <MenuEntry link="#home" text={STRINGS.MENU_1}/>
            <MenuEntry link="#aboutme" text={STRINGS.MENU_2}/>
            <MenuEntry link="#experience" text={STRINGS.MENU_3}/>
            <MenuEntry link="#contact" text={STRINGS.MENU_4}/>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default Header