import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav/SideNav";
import { IoMenuSharp } from "react-icons/io5";
import {useState} from 'react';

const RouteLayout = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  console.log('route Outlet')

  function handleToggleNav(){
    setIsNavVisible(!isNavVisible);
  }

  function hideMobileNav(){
    if(isNavVisible){
      setIsNavVisible(false);
    }
  }

  return (
    <>
    <div className="mobile-nav-icon">
      <IoMenuSharp onClick={handleToggleNav} />
    </div>
      <div className="container">
        <aside className={isNavVisible ? ' aside open' : 'aside'}>
          <SideNav onCatSelect={handleToggleNav}/>
        </aside>
        <main className="main" onClick={hideMobileNav}>
          <Outlet />         
        </main>
      </div>
    </>
  );
};

export default RouteLayout;
