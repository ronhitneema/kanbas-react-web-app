// Author: Ronhit Neema 
import { Link } from "react-router-dom";
import "./index.css";

const CourseCard = ({ course }) => {
  return (
    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
      <div className="card kanbas-card">
        <div className="kanbas-card-img card-img-top"></div>
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          <p className="card-text">
            {course.number} <br />
            {course.startDate} to {course.endDate}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;