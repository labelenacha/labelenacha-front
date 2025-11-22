const MenuEntry = ({text, link}) => {
  return (
    <a className=" p-3 hover:bg-gray-50 rounded-xl
      border-2 border-transparent hover:border-gray-800
      transition-all duration-200 text-base tracking-wider
     text-gray-800 hover:text-black z-50"
       href={link}>
      {text}
    </a>
  )
}

export default MenuEntry;