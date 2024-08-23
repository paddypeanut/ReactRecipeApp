import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import classes from './SideNav.module.css';

const SideNav = ({onCatSelect}) => {
    const [navItems, setNavItems] = useState([{}]);


    useEffect(()=> {
        async function fetchData(){
           
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
            const resData = await response.json();

            setNavItems(resData.meals);
            return resData;
            
        };
        fetchData();
    },[setNavItems]);

    let i = 0;

    return(
        <>
            {navItems.length > 0 &&
                <ul className={classes.sidenav}>
                    {navItems.map(cat => <li key={cat.strCategory + i++}>
                        <NavLink to={`/category/${cat.strCategory}`} className={classes.link} onClick={onCatSelect}>{cat.strCategory}</NavLink>
                    </li>)}
                </ul>
            }
        </>
    )
}

export default SideNav;