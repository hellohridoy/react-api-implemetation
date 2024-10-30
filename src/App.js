import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';  // Correct the case to match the file name
import AboutPage from './components/AboutPage';
import TeacherPage from './components/TeacherPage';
import StudentPage from './components/StudentPage';
import ContactPage from './components/ContactPage';
import DepartmentPage from './components/DepartmentPage';
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* Assuming HomePage exists */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/teacher" element={<TeacherPage />} />
                <Route path="/student" element={<StudentPage />} />
                <Route path="/department" element={<DepartmentPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;
