import db from "../Database";
import CourseCard from "./DashboardCard";

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
