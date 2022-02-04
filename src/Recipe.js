const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="col-md-4 mt-5">
      <div className="card h-100" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="recipe" />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
         {calories}
          </p>
          </div>
{/* 
          <ol className="list-group">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol> */}
        
       
      </div>

  
    </div>
  );
};

export default Recipe;
