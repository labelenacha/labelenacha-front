import styles from "../../styles/fonts.module.css";

const CategoryTitle = ({ titleText }) => {
  return (
    <div className={`mt-20 ml-[5%] text-7xl mb-2 sm:mb-10 underline text-gray-800 ${styles.sendflowers}`}>
      <h1>
        {titleText}
      </h1>
    </div>
  );
}

export default CategoryTitle;