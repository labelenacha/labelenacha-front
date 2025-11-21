const MenuEntry = ({text, link}) => {
  return (
    <a className="text-base tracking-wider transition-colors text-gray-800 hover:text-black z-50"
       href={link}>
      {text}
    </a>
  )
}

export default MenuEntry;