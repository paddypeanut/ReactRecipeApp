import { useLoaderData, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MealList from "../components/MealList";



const ShowByCategoryPage = () => {

    const location = useLocation();
    const data = useLoaderData();

    return(
        <>
        <AnimatePresence mode="wait" initial={true}>
            <MealList key={location.pathname + data.page} data={data} />    
        </AnimatePresence>
            
        </>
    );
};

export default ShowByCategoryPage;

export const loader = async ({params,request}) => {
    let url;
    let newPage;
    let page;

    if(request.url.includes('?page')){
        url = request.url.split('?');
        newPage = url[1].split("=");
    }
    
    const category = params.cat;

    if(newPage){
        page = parseInt(newPage[1]);
    } else {
        page = 1;
    }
   
    const itemsPerPage = 9;

    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category);
    const resData = await response.json();

    const pageMax = Math.ceil(resData.meals.length / itemsPerPage);
  
    let offset;
    if (page === 1) {
        offset = (page - 1) * itemsPerPage;
    } else {
        offset = (page * itemsPerPage) - itemsPerPage;
    }
    const endOffset = page * itemsPerPage;

    const pageData = resData.meals.slice(offset,endOffset);

    const data = {
        data:pageData,
        category: category,
        page: page,
        pageMax: pageMax,
        loading: false
    }
    return data;
}