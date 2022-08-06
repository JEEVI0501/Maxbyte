import  Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  Bm from './Pages/bm';
import  Pm from './Pages/pm';
import Dashboard from './Pages/dashboard';
import Clirt from './Pages/clirt';
import TicketList from './Pages/ticketList';

function App(){
    return(
        //<Sidebar />
        <Router>
            <Sidebar>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/pm" element={<Pm />} />
                <Route path="/clirt" element={<Clirt />} />
                <Route path="/Bm" element={<Bm />} />
                <Route path="/ticketList" element={<TicketList />} />
            </Routes>
            </Sidebar>
        </Router>
        
    );
}

export default App;