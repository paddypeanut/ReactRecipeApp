import classes from './MealCard.module.css';
import { useNavigate } from 'react-router-dom';

const MealCard = ({title, image, id}) => {
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/meal/${id}`);
    }
    return(
        <>
        <div className={classes.meal}>
            <div className={classes.imgcontainer} onClick={handleClick}>
                <h2 className={classes.h2}>{title}</h2>
                <div className={classes.overlay} />
                <img className={classes.img} src={image} alt={title} />
            </div>
        </div>
        </>
    );
}

export default MealCard;