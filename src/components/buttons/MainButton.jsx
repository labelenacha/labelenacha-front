import 'boxicons/css/boxicons.min.css';

const MainButton = ({isDark, text, icon}) => {
  const moreClasses = isDark ? 'bg-gray-600 text-gray-50 hover:text-white' : 'bg-gray-50 text-gray-800 hover:text-gray-50';
  const classes = `border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] ${moreClasses}`;
  return (
    <a
      className={classes}
      href="#">
      {text} <i className={icon}></i>
    </a>
  )
}

export default MainButton;