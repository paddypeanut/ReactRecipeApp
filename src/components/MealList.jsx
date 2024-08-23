import { GrNext } from "react-icons/gr";
import MealCard from "../components/MealCard/MealCard";
import { useNavigate } from "react-router-dom";
import AnimatePage from "./AnimatePage";

import classes from './MealList.module.css';

const MealList = ({ data }) => {
    const navigate = useNavigate();
    const meals = data.data;

    function handleNext() {
        navigate(`/category/${data.category}?page=${parseInt(data.page) + 1}`);
        //window.scrollTo({top: 0, behavior: 'smooth'});
    }

    function handlePrevious() {
        navigate(`/category/${data.category}?page=${parseInt(data.page) - 1}`);
        //window.scrollTo({top: 0, behavior: 'smooth'});
    }
  return (
    <>
    
      <h1 style={{ textAlign: "center" }}>{data.category}</h1>
      <AnimatePage>
      <div className="meals">
        {meals.map((item) => (
          <MealCard
            key={item.idMeal}
            id={item.idMeal}
            image={item.strMealThumb}
            title={item.strMeal}
          />
        ))}
      </div>
      </AnimatePage>

      {data.pageMax > 1 && (
        <p className={classes.pages}>
          Showing page {data.page} of {data.pageMax}
        </p>
      )}
      <div className={classes.controls}>
        {data.page > 1 && (
          <p>
            <button className={classes.prevBtn} onClick={handlePrevious}>
              <GrNext />
            </button>
          </p>
        )}
        {data.page < data.pageMax && (
          <p>
            <button className={classes.nextBtn} onClick={handleNext}>
              <GrNext />
            </button>
          </p>
        )}
      </div>
      
    </>
  );
};

export default MealList;
