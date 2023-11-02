import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { VscBook } from "react-icons/vsc";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  // const courses = db.courses;
  return (
    <div className="wd-dashboard-container">
      <div className="row">
        <div class="col wd-dashboard-title1">
          Dashboard
          <hr />
          <h5>New Course</h5>
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
            type="date"
          />
          <input
            value={course.endDate}
            className="form-control"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
            type="date"
          />
          <input
            value={course.section}
            className="form-control"
            onChange={(e) => setCourse({ ...course, section: e.target.value })}
          />
          <input
            value={course.term}
            className="form-control"
            onChange={(e) => setCourse({ ...course, term: e.target.value })}
          />
          <button className="btn btn-danger float-end" onClick={addNewCourse}>
            + Courses
          </button>
          <button className="btn btn-success float-end" onClick={updateCourse}>
            Update
          </button>
        </div>
      </div>
      <div className="row">
        <div class="col wd-dashboard-title2">
          Published Courses
          <hr />
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
                  <div>
                    <VscBook />
                    <button
                      className="btn btn-primary float-end"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger float-end"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
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
