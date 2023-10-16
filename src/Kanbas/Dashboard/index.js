import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { VscBook } from "react-icons/vsc";


function Dashboard() {
  const courses = db.courses;
  return (
    <div className="wd-dashboard-container">
      <div className="row">
      <div class="col wd-dashboard-title1">
        Dashboard
        <hr/>
      </div>
      </div>
      <div className="row">
      <div class="col wd-dashboard-title2">
        Published Courses
        <hr/>
      </div>
      </div>
      <div className="d-flex flex-wrap row row-cols-1 row-cols-md-3 g-4 wd-dashboard-grid">
        {courses.map((course) => (
          <div className="col"> 
          <div class="card h-100">
          <img src="/images/blue.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
              <h5 class="card-title">
              <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  // className="btn btn-primary"
                >
                  {`${course.number} ${course.name}`}
                </Link>
                </h5>
              <p class="card-text">
                  <div>{`${course.number}.${course.section} ${course.term}`}</div>
                  <div><VscBook/></div>
              </p>
          </div>
          </div>
      </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;