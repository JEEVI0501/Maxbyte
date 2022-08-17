import { motion } from "framer-motion";
import './Sidebar.css';
import { MdDashboard , MdTipsAndUpdates , MdEngineering } from "react-icons/md";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import { GiAutoRepair } from "react-icons/gi";
import { RiTicket2Line } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import { GiGears } from "react-icons/gi";
import Logo from "C:/Users/HP/Desktop/maxbytes/src/assets/Logo.jpeg";
import {useState} from 'react';
import { AiOutlineAudit } from "react-icons/ai";
import { GrVmMaintenance } from "react-icons/gr";
import SidebarMenu from "./SidebarMenu";

const routes =[
    {
        path:"/",
        name:"Dashboard",
        icon:<MdDashboard size={22}/>
    },
    // {
    //     path:"/pm",
    //     name:"Predictive Maintainence",
    //     icon:<MdTipsAndUpdates size={22}/>
    // },
    // {
    //     path:"/clirt",
    //     name:"Clirt",
    //     icon:<GiAutoRepair size={22}/>
    // },
    {
        path:"/abnormality",
        name:"Abnormality",
        icon:<MdEngineering size={22}/>
    },
    {
        path:"/ticketList",
        name:"TicketList",
        icon:<RiTicket2Line size={22}/>
    },
    {
        path:"/config",
        name:"Configuration",
        icon:<GiGears size={22}/>,
        exact:true,
        subRoutes : [
            {
                path:"/config/audit",
                name:"Audit",
                icon :<AiOutlineAudit size={22} />
            },
            {
                path:"/config/maintainence",
                name:"Maintainence",
                icon :<GrVmMaintenance size={22} style={{color:"#223E7F"}}/>
            },
            
        ],
    },
    
];

// const SubNavigation =(props)=>{
        
//     const routes = props.items;
//     console.log(routes)
//     // return (
//     //     <>
        
//     //     <ul>
            
//     //     {routes.map((routes,index)=>{
            
//     //         return (
//     //             <NavLink to={routes.path} key={routes.name} className = "sidebar-links">
                    
//     //                         {/* <div className = "sideBar.icons">{routes.icon}</div> */}
//     //                         <div className = "sideBar.name">{routes.name}</div>
//     //             </NavLink>
                
//     //         )
//     //     }
//     //     )}
//     //     </ul></>
//     //)
//     if(!routes) return null;
//     return (
//     <ul>
//       {routes.map((item, index) => {
//         return(
//              <NavLink to={item.path} key={index} className = "sidebar-links">
//                 <div className = "sideBar.icons">{item.icon}</div>
//                     {
//                         <div className = "sideBar.name">{item.name}</div>
//                     }
//             </NavLink>
//         )
//       })}
//     </ul>
//   );
// }


const Sidebar = ({children}) => {
  
    const[show,setShow] = useState(false);
    const toggle =() => setShow(!show);

    

    

    return (

    <div className = "sideBar-main">
        <motion.div animate={{width: show ? "200px" : "60px"}} className = "sideBar-motion" >
        <div className="maxbyte-logo">
            {show && <img alt="logo"
                 src={Logo}
                 width="150"
                  height="40"/>}
        <div className ="sideBar-icons">
            <MdMenu size={25} onClick={toggle} />
        </div></div>
        <section className="sidebar-menu">
          
            {routes.map((route,index)=>{
                if(route.subRoutes){
                    return(
                     <SidebarMenu show={show} route={route} key={route.name} setShow={setShow}/>
                    )
                }
                return(
                <NavLink to={route.path} key={index} className = "sidebar-links">
                  
                    <div className = "sideBar.icons">{route.icon}</div>
                    {
                        show && <div className = "sideBar.name">{route.name}</div>
                     
                    }
                    {/* {showSubMenu && <div><SubNavigation items ={route.subNav} /></div>} */}
                    
                </NavLink>
            )})}
        </section>
        </motion.div>
       <main className="sideBar-child">{children}</main>
    </div>
  )
}

export default Sidebar;