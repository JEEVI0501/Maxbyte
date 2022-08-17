import { FaAngleDown } from "react-icons/fa";
import {NavLink} from "react-router-dom";
import './Sidebar.css';
import {useState} from 'react';

const SidebarMenu = ({route,show,setShow}) => {
    const[showSubMenu,setShowSubMenu] =useState(false);
    const clicked =() => 
    {
        setShowSubMenu(!showSubMenu);
        setShow(true);
    }

  return (
    <>
    <div className = "subMenus" onClick ={clicked}>
        <div className="subMenu-items">
            <div className = "subMenu-icons">{route.icon}</div>
            {
                show && <div className = "sideBar.name">{route.name}</div>
                     
            }
            
            </div>
            
    </div>
    {show && <section className="sub-menu">
            {showSubMenu && route.subRoutes.map((subRoute, i) =>
                <NavLink to={subRoute.path} key={i} className = "sidebar-links">
                  
                    <div className = "sideBar.icons">{subRoute.icon}</div>
                    {
                        show && <div className = "sideBar.name">{subRoute.name}</div>
                     
                    }
                    
                </NavLink>
            )}
            </section>}
    </>
  )
}

export default SidebarMenu