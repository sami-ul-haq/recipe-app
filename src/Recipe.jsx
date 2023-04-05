const Recipe = ({ recipe }) => {
  console.log(recipe);
  const { label, image, url } = recipe;
  return (
    <div className="recipe-item">
      <img src={image} alt="recipe-image" />
      <p>{label}</p>
      <a href={url}><button>Read More</button></a>
    </div>
  );
};

export default Recipe;