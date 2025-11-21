import React from "react";
import 'boxicons/css/boxicons.min.css';
import MenuEntry from "./MenuEntry.jsx";

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
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 m-0">
        labelenacha
      </h1>

      <nav className="hidden md:flex items-center gap-12">
        <MenuEntry link="#" text="1"/>
        <MenuEntry link="#" text="2"/>
        <MenuEntry link="#" text="3"/>
        <MenuEntry link="#" text="4"/>
      </nav>

      {/*mobile*/}
      <button onClick={toggleMenu}
              className="md:hidden text-3xl p-2 z-50">
        <i className="bx bx-menu"></i>
      </button>

      <div id="mobileMenu"
           className=" hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opaccity-70 backdrop-blur- md">
        <nav className="flex flex-col gap-6 items-center">
          <MenuEntry link="#" text="1"/>
          <MenuEntry link="#" text="2"/>
          <MenuEntry link="#" text="3"/>
          <MenuEntry link="#" text="4"/>
        </nav>
      </div>

    </header>
  )
}

export default Header