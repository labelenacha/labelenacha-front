const MenuEntry = ({text, link}) => {
  return (
    <div className="">
      <a className=" p-3 hover:bg-gray-50 rounded-xl
      border-2 border-transparent hover:border-gray-800
      transition-all duration-200 text-base tracking-wider transition-colors
     text-gray-800 hover:text-black z-50"
         href={link}>
        {text}
      </a>
    </div>
  )
}

export default MenuEntry;