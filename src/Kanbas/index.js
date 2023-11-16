import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";


function Kanbas() {
  const URL = `${process.env.REACT_APP_BASE_URL}/api/courses`;
  console.log(URL)

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    department: "new Department",
    credits: 3,
  });
  const [courses, setCourses] = useState([]);

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  
  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
  };

  const deleteCourse = async (course) => {
    await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter((c) => c._id !== course._id));
  };

  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse(course);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route
            path="Account"
            element={
              <div>
                <h1>Account</h1>
                <p>Not implemented...</p>
              </div>
            }
          />
          <Route
            path="Dashboard"
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          <Route
            path="Courses"
            element={
              <div>
                <h1>Courses</h1>
                <p>Please navigate to a course via the Dashboard tab...</p>
              </div>
            }
          />
          <Route
            path="Courses/:courseId/*"
            element={<Courses/>}
          />
          <Route
            path="Calendar"
            element={
              <div>
                <h1>Calendar</h1>
                <p>Not implemented...</p>
              </div>
            }
          />
          <Route
            path="Inbox"
            element={
              <div>
                <h1>Inbox</h1>
                <p>Not implemented...</p>
              </div>
            }
          />
          <Route
            path="History"
            element={
              <div>
                <h1>History</h1>
                <p>Not implemented...</p>
              </div>
            }
          />
          <Route
            path="Studio"
            element={
              <div>
                <h1>Studio</h1>
                <p>Not implemented...</p>
              </div>
            }
          />
          <Route
            path="Commons"
            element={
              <div>
                <h1>Commons</h1>
                <p>Not implemented...</p>
              </div>
            }
          />
          \
          <Route
            path="Help"
            element={
              <div>
                <h1>Help</h1>
                <p>Not implemented...</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Provider>
  );
}
export default Kanbas;
