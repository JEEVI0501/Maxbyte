import  Sidebar from './Components/SideBar/Sidebar';
import NavBar from './Components/navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import  Bm from './Pages/bm';
// import  Pm from './Pages/configuration/pm';
import Dashboard from './Pages/dashboard';
// import Clirt from './Pages/clirt';
import TicketList from './Pages/ticketList';
import Configuration from './Pages/config';
import Abnormality from './Pages/abnormality';
import Audit from './Pages/configuration/audit';
import Maintainence from './Pages/configuration/maintainence';

function App(){
    return(
        //<Sidebar />
        <Router>
            <Sidebar>
            <NavBar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/pm" element={<Pm />} />
                <Route path="/clirt" element={<Clirt />} /> */}
                <Route path="/abnormality" element={<Abnormality />} />
                <Route path="/config" element={<Configuration />} />
                <Route path="/ticketList" element={<TicketList />} />
                <Route path="/config/audit" element={<Audit />} />
                <Route path="/config/maintainence" element={<Maintainence />} />
            </Routes>
            </Sidebar>
        </Router>
        
    );
}

export default App;