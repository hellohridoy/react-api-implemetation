import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddTeacher = () => {
    const [teacher, setTeacher] = useState({
        teachersName: '',
        teachersEmail: '',
        teacherPhoneNumber: '',
        department: '',
        specialization: '',
        hireDate: '',
        salary: '',
        biography: '',
        profilePicture: '',
        qualifications: {
            degree: '',
            institution: '',
            year: '',
            specialization: ''
        }
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('qualification')) {
            const [_, key] = name.split('.');
            setTeacher({
                ...teacher,
                qualifications: { ...teacher.qualifications, [key]: value }
            });
        } else {
            setTeacher({ ...teacher, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form validation here if needed
        console.log(teacher);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Add Teacher</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="teachersName">Teacher's Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.teachersName ? 'is-invalid' : ''}`}
                            id="teachersName"
                            name="teachersName"
                            value={teacher.teachersName}
                            onChange={handleChange}
                            placeholder="Enter teacher's name"
                            required
                        />
                        {errors.teachersName && <div className="invalid-feedback">{errors.teachersName}</div>}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="teachersEmail">Email</label>
                        <input
                            type="email"
                            className={`form-control ${errors.teachersEmail ? 'is-invalid' : ''}`}
                            id="teachersEmail"
                            name="teachersEmail"
                            value={teacher.teachersEmail}
                            onChange={handleChange}
                            placeholder="Enter teacher's email"
                            required
                        />
                        {errors.teachersEmail && <div className="invalid-feedback">{errors.teachersEmail}</div>}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="teacherPhoneNumber">Phone Number</label>
                        <input
                            type="text"
                            className={`form-control ${errors.teacherPhoneNumber ? 'is-invalid' : ''}`}
                            id="teacherPhoneNumber"
                            name="teacherPhoneNumber"
                            value={teacher.teacherPhoneNumber}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            required
                        />
                        {errors.teacherPhoneNumber && <div className="invalid-feedback">{errors.teacherPhoneNumber}</div>}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="department">Department</label>
                        <input
                            type="text"
                            className={`form-control ${errors.department ? 'is-invalid' : ''}`}
                            id="department"
                            name="department"
                            value={teacher.department}
                            onChange={handleChange}
                            placeholder="Enter department"
                            required
                        />
                        {errors.department && <div className="invalid-feedback">{errors.department}</div>}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="specialization">Specialization</label>
                        <input
                            type="text"
                            className={`form-control ${errors.specialization ? 'is-invalid' : ''}`}
                            id="specialization"
                            name="specialization"
                            value={teacher.specialization}
                            onChange={handleChange}
                            placeholder="Enter specialization"
                            required
                        />
                        {errors.specialization && <div className="invalid-feedback">{errors.specialization}</div>}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="hireDate">Hire Date</label>
                        <input
                            type="date"
                            className={`form-control ${errors.hireDate ? 'is-invalid' : ''}`}
                            id="hireDate"
                            name="hireDate"
                            value={teacher.hireDate}
                            onChange={handleChange}
                            required
                        />
                        {errors.hireDate && <div className="invalid-feedback">{errors.hireDate}</div>}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="salary">Salary</label>
                        <input
                            type="number"
                            className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
                            id="salary"
                            name="salary"
                            value={teacher.salary}
                            onChange={handleChange}
                            placeholder="Enter salary"
                            required
                        />
                        {errors.salary && <div className="invalid-feedback">{errors.salary}</div>}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="profilePicture">Profile Picture URL</label>
                        <input
                            type="text"
                            className={`form-control ${errors.profilePicture ? 'is-invalid' : ''}`}
                            id="profilePicture"
                            name="profilePicture"
                            value={teacher.profilePicture}
                            onChange={handleChange}
                            placeholder="Enter profile picture URL"
                            required
                        />
                        {errors.profilePicture && <div className="invalid-feedback">{errors.profilePicture}</div>}
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="biography">Biography</label>
                    <textarea
                        className={`form-control ${errors.biography ? 'is-invalid' : ''}`}
                        id="biography"
                        name="biography"
                        value={teacher.biography}
                        onChange={handleChange}
                        placeholder="Enter biography"
                        required
                        rows="3"
                    ></textarea>
                    {errors.biography && <div className="invalid-feedback">{errors.biography}</div>}
                </div>

                <h4 className="mb-4">Qualifications</h4>

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="qualification.degree">Degree</label>
                        <input
                            type="text"
                            className={`form-control ${errors.degree ? 'is-invalid' : ''}`}
                            id="qualification.degree"
                            name="qualification.degree"
                            value={teacher.qualifications.degree}
                            onChange={handleChange}
                            placeholder="Enter degree"
                            required
                        />
                        {errors.degree && <div className="invalid-feedback">{errors.degree}</div>}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="qualification.institution">Institution</label>
                        <input
                            type="text"
                            className={`form-control ${errors.institution ? 'is-invalid' : ''}`}
                            id="qualification.institution"
                            name="qualification.institution"
                            value={teacher.qualifications.institution}
                            onChange={handleChange}
                            placeholder="Enter institution"
                            required
                        />
                        {errors.institution && <div className="invalid-feedback">{errors.institution}</div>}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="qualification.year">Graduation Year</label>
                        <input
                            type="number"
                            className={`form-control ${errors.year ? 'is-invalid' : ''}`}
                            id="qualification.year"
                            name="qualification.year"
                            value={teacher.qualifications.year}
                            onChange={handleChange}
                            placeholder="Enter graduation year"
                            required
                        />
                        {errors.year && <div className="invalid-feedback">{errors.year}</div>}
                    </div>

                    <div className="col-md-12 mb-3">
                        <label htmlFor="qualification.specialization">Specialization</label>
                        <input
                            type="text"
                            className={`form-control ${errors.specialization ? 'is-invalid' : ''}`}
                            id="qualification.specialization"
                            name="qualification.specialization"
                            value={teacher.qualifications.specialization}
                            onChange={handleChange}
                            placeholder="Enter specialization"
                            required
                        />
                        {errors.specialization && <div className="invalid-feedback">{errors.specialization}</div>}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-3">Add Teacher</button>
            </form>
        </div>
    );
};

export default AddTeacher;
