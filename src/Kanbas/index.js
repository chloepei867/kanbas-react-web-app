import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./KanbasNavigation/index.css"

function Kanbas() {
    return (
      <div className="d-flex">
        <div>
         <KanbasNavigation/>
        </div>
        <div>
          <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses/>} />
          {/* <Route path="Courses/*" element={<h1>Courses</h1>} /> */}
        </Routes>

        </div>
      </div>
    );
  }
  export default Kanbas;
  
  
   