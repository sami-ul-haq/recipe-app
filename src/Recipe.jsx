const Recipe = ({ recipe }) => {
  const { label, image } = recipe;
  return (
    <div className="recipe-item">
      <img src={image} alt="recipe-image" />
      <p>{label}</p>
    </div>
  );
};

export default Recipe;