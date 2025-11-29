const CategoryTitle = ({titleText}) => {
  return (
    <div>
      <h1
        className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wider my-8 text-gray-800">
        {titleText}
      </h1>
    </div>
  );
}

export default CategoryTitle;