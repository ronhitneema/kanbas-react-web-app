import { Link } from "react-router-dom";
import db from "../Database";
import courseImage from "../Database/exampleIcon.png";
import "../Dashboard/DashboardCard/index.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="ms-3">
      <span className="wd-header">Dashboard</span>
      <br />
      <hr />
      <span className="wd-published-courses ms-3">Published courses ({courses.length})</span>
      <br />
      <hr className="ms-3"/>
      <div className="list-group wd-card-group">
        <div className="row row-cols-md-5 g-5">
          {courses.map((course) => (
            <div className="col">
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item"
              >
                <div className="card h-100">
                  <img src={courseImage} alt="courseImage"/>
                  <div className="card-body">
                    <h6 className="card-title"><strong>{course.name}</strong></h6>
                    <div className="card-text">
                      <p className="card-text"><strong>{course._id}</strong></p>
            {course.startDate} to {course.endDate}<br/>
            {course.number}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
