import MealDetails from "../components/MealDetails/MealDetails"
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const DetailsPage = () => {

    const location = useLocation();

    return(
        <>
        <AnimatePresence mode="wait" initial={true}>
            <MealDetails key={location.pathname}/>
        </AnimatePresence>  
        </>
    )
}
export default DetailsPage;