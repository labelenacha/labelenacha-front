import 'boxicons/css/boxicons.min.css';

const MainButton = ({isDark, text, icon, link}) => {
  const moreClasses = isDark ? 'bg-gray-600 text-gray-50 hover:text-white' : 'bg-gray-50 text-gray-800 hover:text-gray-50';
  const classes = `inline-flex items-center border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] ${moreClasses}`;
  return (
    <a
      className={classes}
      href={link}>
      {text} <i className={`text-2xl ml-2 ${icon}`}></i>
    </a>
  )
}

export default MainButton;