
    import React, { useEffect, useState } from "react";
    import { getDashboardDetails } from "../services/DashBoardService";

    import axios from "axios";
    const DashboardComponent = () => {
        const [dashboardData, setDashboardData] = useState(null);
        const [error, setError] = useState(null);
        const [teachers, setTeachers] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const data = await getDashboardDetails();
                    setDashboardData(data[0]); // Assuming the API returns a list, we take the first item
                } catch (error) {
                    setError("Failed to load dashboard details");
                }
            };

            fetchData();
        }, []);



            useEffect(() => {
                // Fetch data from the API when the component mounts
                const fetchTeachers = async () => {
                    try {
                        const response = await axios.get('http://localhost:9000/v1/university/university-infos/teacher-dashboard-details');
                        // Set the fetched data to the state
                        setTeachers(response.data);
                    } catch (error) {
                        console.error('Error fetching the teacher data', error);
                    }
                };

                fetchTeachers();
            }, []); // Empty dependency array means it will run only once after the component mounts

            if (error) {
                return <div>{error}</div>;
            }

            if (!dashboardData) {
                return <div>Loading...</div>;
            }

            return (
                <div>
                    <div className="container mt-4">
                        {/*<h2 className="mb-4 text-center">University Dashboard</h2>*/}
                        <div className="row">
                            {/* Quick Overview Cards */}
                            <div className="col-md-3 mb-3">
                                <div className="card text-white bg-primary">
                                    <div className="card-body">
                                        <h5 className="card-title">Teachers</h5>
                                        <p className="card-text">
                                            {dashboardData.totalTeacher != null && true
                                                ? `Total Teachers: ${dashboardData.totalTeacher}`
                                                : "Total Teachers data is not available"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-3">
                                <div className="card text-white bg-success">
                                    <div className="card-body">
                                        <h5 className="card-title">Students</h5>
                                        <p className="card-text">
                                            {dashboardData.totalStudent != null && true
                                                ? `Total Student: ${dashboardData.totalStudent}`
                                                : "Total Student data is not available"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-3">
                                <div className="card text-white bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Departments</h5>
                                        <p className="card-text">
                                            {dashboardData.totalDepartments != null && true
                                                ? `Total Departments: ${dashboardData.totalDepartments}`
                                                : "DepartmentsTotal Teachers data is not available"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-3">
                                <div className="card text-white bg-danger">
                                    <div className="card-body">
                                        <h5 className="card-title">Subjects</h5>
                                        <p className="card-text">
                                            {dashboardData.totalSubject != null && true
                                                ? `Total Departments: ${dashboardData.totalSubject}`
                                                : "No Subject available data is not available"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="mb-3">Teachers List</h4>
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>Specialization</th>
                                        <th>Department</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {teachers.length > 0 ? (
                                        teachers.map((teacher, index) => (
                                            <tr key={index}>
                                                <td>{teacher.teachersName}</td>
                                                <td>{teacher.teacherPhoneNumber}</td>
                                                <td>{teacher.qualifications.degree} - {teacher.qualifications.year} ({teacher.qualifications.institution})</td>
                                                <td>{teacher.department}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5">No data available</td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <h4 className="mb-3">Students List</h4>
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Department</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>john.doe@example.com</td>
                                    <td>+1234567899</td>
                                    <td>Computer Science</td>
                                </tr>
                                {/* Add more student rows */}
                                </tbody>
                            </table>
                        </div>

                        <div className="col-md-12">
                            <h4 className="mb-3">Departments List</h4>
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                <tr>
                                    <th>Department Name</th>
                                    <th>Head of Department</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Economics</td>
                                    <td>Dr. Sarah Lee</td>
                                </tr>
                                {/* Add more department rows */}
                                </tbody>
                            </table>
                        </div>

                        <div className="col-md-12">
                            <h4 className="mb-3">Subjects List</h4>
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                <tr>
                                    <th>Subject Name</th>
                                    <th>Department</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Macroeconomics</td>
                                    <td>Economics</td>
                                </tr>
                                {/* Add more subject rows */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
  };
    export default DashboardComponent
