import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation, Link }
  from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { VscThreeBars } from "react-icons/vsc";
import "./index.css";

function Courses() {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const course = db.courses.find(
    (course) => course._id === courseId);
  return (
    <div>
      <div className="wd-dashboard-breadcrumb">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <VscThreeBars/>  
              <Link to={`/Kanbas/Courses/${course._id}`}>
                {`${course.number}.${course.section} ${course.term}`}
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{screen}</li>
          </ol>
        </nav>
        <hr/>
      </div>
      <div className="row">
        <div className="col-2">
          <CourseNavigation />
        </div>
        <div
          className="col-10 bottom-0 end-0"
          // className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;