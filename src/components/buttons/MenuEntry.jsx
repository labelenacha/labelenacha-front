const MenuEntry = ({text, link}) => {

  const handleClick = (e) => {
    if (link && link.startsWith('#')) {
      e.preventDefault();
      const id = link.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({behavior: 'smooth', block: 'start'})
      }
      const menu = document.getElementById('mobileMenu');
      if (menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
      }
    }
  }

  return (
    <a className=" p-3 hover:bg-gray-50 rounded-xl
      border-2 border-transparent hover:border-gray-800
      transition-all duration-200 text-base tracking-wider
     text-gray-800 hover:text-black z-50"
       href={link}
       onClick={handleClick}>
      {text}
    </a>
  )
}

export default MenuEntry;