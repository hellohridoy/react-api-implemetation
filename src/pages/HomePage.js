
    import React, { useEffect, useState } from "react";
    import { getDashboardDetails } from "../services/DashBoardService";

    const DashboardComponent = () => {
        const [dashboardData, setDashboardData] = useState(null);
        const [error, setError] = useState(null);

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

                {/* Detailed Tables Section */}
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="mb-3">Teachers List</h4>
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Department</th>
                                <th>Specialization</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Laura Wilson</td>
                                <td>laura.wilson@example.com</td>
                                <td>+1234567897</td>
                                <td>Economics</td>
                                <td>Macroeconomics</td>
                            </tr>
                            {/* Add more teacher rows */}
                            </tbody>
                        </table>
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
        </div>
    );
};

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">University Dashboard</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Teachers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Students</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Departments</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Subjects</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default DashboardComponent;
