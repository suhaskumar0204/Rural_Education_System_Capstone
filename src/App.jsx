import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Student components
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import TakeExam from "./TakeExam";
import SolvePuzzle from "./SolvePuzzle";
import About from "./About";
import RoleSelection from "./RoleSelection";
import StudentTopics from "./StudentTopics";

// Teacher components
import TeacherLogin from "./TeacherLogin";
import TeacherRegister from "./TeacherRegister";
import TeacherDashboard from "./TeacherDashboard";
import StudentManagement from "./StudentManagement";
import MarkAttendance from "./MarkAttendance";
import UpdateTask from "./UpdateTask";
import TodaysTopics from "./TodaysTopics";
import ReviewStudents from "./ReviewStudents";
import ViewReviews from "./ViewReviews";

// Admin components
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import AdminTeachers from "./AdminTeachers";
import AdminTeacherProgress from "./AdminTeacherProgress";
import AdminManageTeachers from "./AdminManageTeachers";

// ⭐ NEW — Admin Manage Students
import AdminStudentManagement from "./AdminStudentManagement";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<RoleSelection />} />

        {/* -------------------- ADMIN ROUTES -------------------- */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-teachers" element={<AdminTeachers />} />
        <Route path="/admin-manage-teachers" element={<AdminManageTeachers />} />
        <Route path="/admin-teacher-progress/:id" element={<AdminTeacherProgress />} />

        {/* ⭐ NEW — Manage Students for Admin */}
        <Route path="/admin-students" element={<AdminStudentManagement />} />

        {/* -------------------- TEACHER ROUTES -------------------- */}
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/teacher-register" element={<TeacherRegister />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/student-management" element={<StudentManagement />} />
        <Route path="/mark-attendance" element={<MarkAttendance />} />
        <Route path="/update-task" element={<UpdateTask />} />
        <Route path="/todays-topics" element={<TodaysTopics />} />
        <Route path="/review-students" element={<ReviewStudents />} />
        <Route path="/view-reviews" element={<ViewReviews />} />

        {/* -------------------- STUDENT ROUTES -------------------- */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />

        {user && (
          <>
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/dashboard/take-exam" element={<TakeExam />} />
            <Route path="/solve-puzzle" element={<SolvePuzzle />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard/student-topics" element={<StudentTopics />} />
          </>
        )}

        {/* DEFAULT FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}
