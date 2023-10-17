// Author: Ronhit Neema 
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route
          path="Account"
          element={
            <div>
              <h1>Account</h1>
              <p>Not Implemented yet, in Progress...</p>
            </div>
          }
        />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route
          path="Courses"
          element={
            <div>
              <h1>Courses</h1>
              <p>Please Explore Courses through the Dashboard Tab...</p>
            </div>
          }
        />
        <Route path="Courses/:courseId/*" element={<Courses />} />
        <Route
          path="Calendar"
          element={
            <div>
              <h1>Calendar</h1>
              <p>Not Implemented yet, in Progress...</p>
            </div>
          }
        />
        <Route
          path="Inbox"
          element={
            <div>
              <h1>Inbox</h1>
              <p>Not Implemented yet, in Progress...</p>
            </div>
          }
        />
        <Route
          path="History"
          element={
            <div>
              <h1>History</h1>
              <p>Not Implemented yet, in Progress...</p>
            </div>
          }
        />
        <Route
          path="Studio"
          element={
            <div>
              <h1>Studio</h1>
              <p>Not Implemented yet, in Progress...</p>
            </div>
          }
        />
        <Route
          path="Commons"
          element={
            <div>
              <h1>Commons</h1>
              <p>Not Implemented yet, in Progress...</p>
            </div>
          }
        />
        \
        <Route
          path="Help"
          element={
            <div>
              <h1>Help</h1>
              <p>Not Implemented yet, in Progress...</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
export default Kanbas;
