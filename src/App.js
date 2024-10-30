import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Ensure the correct import for Navbar
import AboutPage from './components/AboutPage';
import TeacherPage from './components/TeacherPage';
import StudentPage from './components/StudentPage';
import ContactPage from './components/ContactPage';
import DepartmentPage from './components/DepartmentPage';
import HomePage from './pages/HomePage';
import AddUniversity from './components/AddUniversity';
import UniversityInfo from './components/UniversityInfo';
import ViewUniversity from './components/ViewUniversity';
import UpdateUniversity from './components/UpdateUniversity';

function App() {
    return (
        <Router>
            <Navbar /> {/* This includes the dropdown */}
            <Routes>
                {/* Existing routes */}
                <Route path="/" element={<HomePage />} /> {/* Assuming HomePage exists */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/teacher" element={<TeacherPage />} />
                <Route path="/student" element={<StudentPage />} />
                <Route path="/department" element={<DepartmentPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* University routes from the dropdown */}
                <Route path="/university/add-university" element={<AddUniversity />} />
                <Route path="/university/university-info" element={<UniversityInfo />} />
                <Route path="/university/view" element={<ViewUniversity />} />
                <Route path="/university/update" element={<UpdateUniversity />} />
            </Routes>
        </Router>
    );
}

export default App;
