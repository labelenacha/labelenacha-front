const MenuEntry = ({text, link}) => {
  return (
    <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
       href={link}>
      {text}
    </a>
  )
}

export default MenuEntry;