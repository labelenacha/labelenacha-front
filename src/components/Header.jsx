import React from "react";
import 'boxicons/css/boxicons.min.css';
import MenuEntry from "./MenuEntry.jsx";
import { STRINGS } from "../constants/strings.js";
import styles from '../styles/Header.module.css';

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
    <header className="flex justify-between items-center py-8 px-4 lg:px-20">
      <h1 className={`text-3xl md:text-4xl lg:text-5xl text-gray-800 m-0 ${styles.title}`}>
        {STRINGS.TITLE}
      </h1>

      <nav className="hidden md:flex items-center gap-12">
        <MenuEntry link="#" text={STRINGS.MENU_1}/>
        <MenuEntry link="#" text={STRINGS.MENU_2}/>
        <MenuEntry link="#" text={STRINGS.MENU_3}/>
        <MenuEntry link="#" text={STRINGS.MENU_4}/>
      </nav>

      {/*mobile*/}
      <button onClick={toggleMenu}
              className="md:hidden text-3xl p-2 z-50">
        <i className="bx bx-menu"></i>
      </button>

      <div id="mobileMenu"
           className="hidden mr-2 ml-2 fixed top-22 right-0 p-5
            md:hidden z-40 border-2 rounded-xl border-gray-800
             bg-gray-50 backdrop-blur- md left-auto w-max">
        <nav className="flex flex-col gap-6 items-start">
          <MenuEntry link="#" text={STRINGS.MENU_1}/>
          <MenuEntry link="#" text={STRINGS.MENU_2}/>
          <MenuEntry link="#" text={STRINGS.MENU_3}/>
          <MenuEntry link="#" text={STRINGS.MENU_4}/>
        </nav>
      </div>

    </header>
  )
}

export default Header