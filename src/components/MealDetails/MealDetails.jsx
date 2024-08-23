import { useLoaderData, Link } from "react-router-dom";
import { createIngrediants } from "../../util/getIngriedients";
import AnimatePage from "../AnimatePage";

import classes from "./MealDetail.module.css";

const MealDetails = () => {
  const data = useLoaderData();


  const meal = data.meals[0];

  const ingriedients = createIngrediants("strIngredient", 20, meal);
  const measures = createIngrediants("strMeasure", ingriedients.length, meal);

  const instructions = meal.strInstructions.split(".");

  return (
    <>
    <AnimatePage>
        <div
          className={classes.mealdetail}
        >
          <img
            className={classes.img}
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />

          <p>
            Category -{" "}
            <Link to={`/category/${meal.strCategory}`}>{meal.strCategory}</Link>
          </p>
          <div className={classes.topcontainer}>
            <h1>{meal.strMeal}</h1>
            <ul>
              {ingriedients.map((item, index) => (
                <li key={item + index}>
                  {item} - {measures[index]}
                </li>
              ))}
            </ul>
          </div>

          <h3>Instructions</h3>
          {instructions.map((item, index) => (
            <p className={classes.instructioncontent} key={item + index}>
              {item}.
            </p>
          ))}
        </div>
        </AnimatePage>
    </>
  );
};

export default MealDetails;

export const loader = async ({ params }) => {
  const id = params.mealId;

  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
  const resData = await response.json();

  return resData;
};
