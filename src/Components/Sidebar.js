import { motion } from "framer-motion";
import './Sidebar.css';
import { MdDashboard , MdTipsAndUpdates , MdEngineering } from "react-icons/md";
import {NavLink} from "react-router-dom";
import { GiAutoRepair } from "react-icons/gi";
import { RiTicket2Line } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import Logo from "../assets/Logo.jpeg";
import {useState} from 'react';
const routes =[
    {
        path:"/",
        name:"Dashboard",
        icon:<MdDashboard size={22}/>
    },
    {
        path:"/pm",
        name:"Predictive Maintainence",
        icon:<MdTipsAndUpdates size={22}/>
    },
    {
        path:"/clirt",
        name:"Clirt",
        icon:<GiAutoRepair size={22}/>
    },
    {
        path:"/bm",
        name:"Breakdown Maintainence",
        icon:<MdEngineering size={22}/>
    },
    {
        path:"/ticketList",
        name:"TicketList",
        icon:<RiTicket2Line size={22}/>
    },
];

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
        <section className="routes">
            {routes.map((route)=>(
                <NavLink to={route.path} key={route.name} className = "sidebar-links">
                    <div className = "sideBar.icons">{route.icon}</div>
                    {show && <div className = "sideBar.name">{route.name}</div>}
                </NavLink>
            ))}
        </section>
        </motion.div>
       <main className="sideBar-child">{children}</main>
    </div>
  )
}

export default Sidebar;