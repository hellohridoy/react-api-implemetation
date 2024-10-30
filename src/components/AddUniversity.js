// src/components/AddUniversity.js

import React, { useState } from "react";
import universityService from '../services/universityService'; // Import the service

const AddUniversity = () => {
    const [university, setUniversity] = useState({
        universityName: "",
        universityAddress: "",
        universityType: "PUBLIC",
        universityRating: "",
        universityDescription: "",
        universityImage: "",
        startingDate: "",
        casuallyOpensAt: "",
        value: {
            campusSize: "",
            studentBody: "",
            endowment: "",
            notablePrograms: ""
        }
    });

    const [errors, setErrors] = useState({}); // State for holding error messages

    const handleChange = (e) => {
        setUniversity({ ...university, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Clear the error when user starts typing
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        // Check required fields
        if (!university.universityName) {
            tempErrors.universityName = "University Name is required.";
            isValid = false;
        }
        if (!university.universityAddress) {
            tempErrors.universityAddress = "University Address is required.";
            isValid = false;
        }
        if (!university.universityRating) {
            tempErrors.universityRating = "University Rating is required.";
            isValid = false;
        } else if (university.universityRating < 0 || university.universityRating > 5) {
            tempErrors.universityRating = "Rating must be between 0 and 5.";
            isValid = false;
        }
        if (!university.universityDescription) {
            tempErrors.universityDescription = "Description is required.";
            isValid = false;
        }
        if (!university.startingDate) {
            tempErrors.startingDate = "Starting Date is required.";
            isValid = false;
        }
        if (!university.casuallyOpensAt) {
            tempErrors.casuallyOpensAt = "Casually Opens At is required.";
            isValid = false;
        }
        if (!university.value.campusSize) {
            tempErrors.campusSize = "Campus Size is required.";
            isValid = false;
        }
        if (!university.value.studentBody) {
            tempErrors.studentBody = "Student Body is required.";
            isValid = false;
        }
        if (!university.value.endowment) {
            tempErrors.endowment = "Endowment is required.";
            isValid = false;
        }
        if (!university.value.notablePrograms) {
            tempErrors.notablePrograms = "Notable Programs are required.";
            isValid = false;
        }

        setErrors(tempErrors); // Set the error messages
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return; // Stop submission if validation fails
        }

        // Convert notablePrograms string to an array
        const notablePrograms = university.value.notablePrograms.split(',').map(program => program.trim());

        // Prepare the data to send
        const formattedData = {
            ...university,
            value: {
                ...university.value,
                notablePrograms,
            }
        };

        try {
            const response = await universityService.addUniversity(formattedData);
            console.log("University data submitted:", response);
        } catch (error) {
            console.error("Error submitting university data:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">University Information</h2>
            <form onSubmit={handleSubmit}>
                {/* University Name */}
                <div className="form-group row">
                    <label htmlFor="universityName" className="col-sm-2 col-form-label">University Name</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className={`form-control ${errors.universityName ? 'is-invalid' : ''}`} // Add error class if invalid
                            id="universityName"
                            name="universityName"
                            value={university.universityName}
                            onChange={handleChange}
                            placeholder="Enter university name"
                            required
                        />
                        {errors.universityName && <div className="invalid-feedback">{errors.universityName}</div>}
                    </div>
                </div>

                {/* University Address */}
                <div className="form-group row">
                    <label htmlFor="universityAddress" className="col-sm-2 col-form-label">University Address</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className={`form-control ${errors.universityAddress ? 'is-invalid' : ''}`} // Add error class if invalid
                            id="universityAddress"
                            name="universityAddress"
                            value={university.universityAddress}
                            onChange={handleChange}
                            placeholder="Enter university address"
                            required
                        />
                        {errors.universityAddress && <div className="invalid-feedback">{errors.universityAddress}</div>}
                    </div>
                </div>

                {/* University Type */}
                <div className="form-group row">
                    <label htmlFor="universityType" className="col-sm-2 col-form-label">University Type</label>
                    <div className="col-sm-10">
                        <select
                            className="form-control"
                            id="universityType"
                            name="universityType"
                            value={university.universityType}
                            onChange={handleChange}
                        >
                            <option value="PUBLIC">Public</option>
                            <option value="PRIVATE">Private</option>
                        </select>
                    </div>
                </div>

                {/* University Rating */}
                <div className="form-group row">
                    <label htmlFor="universityRating" className="col-sm-2 col-form-label">University Rating</label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            step="0.1"
                            className={`form-control ${errors.universityRating ? 'is-invalid' : ''}`} // Add error class if invalid
                            id="universityRating"
                            name="universityRating"
                            value={university.universityRating}
                            onChange={handleChange}
                            placeholder="Enter rating (e.g., 4.6)"
                            required
                        />
                        {errors.universityRating && <div className="invalid-feedback">{errors.universityRating}</div>}
                    </div>
                </div>

                {/* University Description */}
                <div className="form-group row">
                    <label htmlFor="universityDescription" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea
                            className={`form-control ${errors.universityDescription ? 'is-invalid' : ''}`} // Add error class if invalid
                            id="universityDescription"
                            name="universityDescription"
                            rows="3"
                            value={university.universityDescription}
                            onChange={handleChange}
                            placeholder="Enter university description"
                            required
                        />
                        {errors.universityDescription && <div className="invalid-feedback">{errors.universityDescription}</div>}
                    </div>
                </div>

                {/* University Image URL */}
                <div className="form-group row">
                    <label htmlFor="universityImage" className="col-sm-2 col-form-label">University Image URL</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="universityImage"
                            name="universityImage"
                            value={university.universityImage}
                            onChange={handleChange}
                            placeholder="Enter image URL"
                        />
                    </div>
                </div>

                {/* Starting Date */}
                <div className="form-group row">
                    <label htmlFor="startingDate" className="col-sm-2 col-form-label">Starting Date</label>
                    <div className="col-sm-10">
                        <input
                            type="date"
                            className={`form-control ${errors.startingDate ? 'is-invalid' : ''}`} // Add error class if invalid
                            id="startingDate"
                            name="startingDate"
                            value={university.startingDate}
                            onChange={handleChange}
                            required
                        />
                        {errors.startingDate && <div className="invalid-feedback">{errors.startingDate}</div>}
                    </div>
                </div>

                {/* Casually Opens At */}
                <div className="form-group row">
                    <label htmlFor="casuallyOpensAt" className="col-sm-2 col-form-label">Casually Opens At</label>
                    <div className="col-sm-10">
                        <input
                            type="datetime-local"
                            className={`form-control ${errors.casuallyOpensAt ? 'is-invalid' : ''}`} // Add error class if invalid
                            id="casuallyOpensAt"
                            name="casuallyOpensAt"
                            value={university.casuallyOpensAt}
                            onChange={handleChange}
                            required
                        />
                        {errors.casuallyOpensAt && <div className="invalid-feedback">{errors.casuallyOpensAt}</div>}
                    </div>
                </div>

                {/* Value Fields */}
                <h4 className="mt-4">Additional Information</h4>

                {/* Campus Size */}
                <div className="form-group row">
                    <label htmlFor="campusSize" className="col-sm-2 col-form-label">Campus Size</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className={`form-control ${errors.campusSize ? 'is-invalid' : ''}`} // Add error class if invalid
                            id="campusSize"
                            name="campusSize"
                            value={university.value.campusSize}
                            onChange={(e) => setUniversity({ ...university, value: { ...university.value, campusSize: e.target.value } })}
                            placeholder="Enter campus size"
                            required
                        />
                        {errors.campusSize && <div className="invalid-feedback">{errors.campusSize}</div>}
                    </div>
                </div>

                {/* Student Body */}
                <div className="form-group row">
                    <label htmlFor="studentBody" className="col-sm-2 col-form-label">Student Body</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className={`form-control ${errors.studentBody ? 'is-invalid' : ''}`} // Add error class if invalid
                            id="studentBody"
                            name="studentBody"
                            value={university.value.studentBody}
                            onChange={(e) => setUniversity({ ...university, value: { ...university.value, studentBody: e.target.value } })}
                            placeholder="Enter student body"
                            required
                        />
                        {errors.studentBody && <div className="invalid-feedback">{errors.studentBody}</div>}
                    </div>
                </div>

                {/* Endowment */}
                <div className="form-group row">
                    <label htmlFor="endowment" className="col-sm-2 col-form-label">Endowment</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className={`form-control ${errors.endowment ? 'is-invalid' : ''}`} // Add error class if invalid
                            id="endowment"
                            name="endowment"
                            value={university.value.endowment}
                            onChange={(e) => setUniversity({ ...university, value: { ...university.value, endowment: e.target.value } })}
                            placeholder="Enter endowment"
                            required
                        />
                        {errors.endowment && <div className="invalid-feedback">{errors.endowment}</div>}
                    </div>
                </div>

                {/* Notable Programs */}
                <div className="form-group row">
                    <label htmlFor="notablePrograms" className="col-sm-2 col-form-label">Notable Programs</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className={`form-control ${errors.notablePrograms ? 'is-invalid' : ''}`} // Add error class if invalid
                            id="notablePrograms"
                            name="notablePrograms"
                            value={university.value.notablePrograms}
                            onChange={(e) => setUniversity({ ...university, value: { ...university.value, notablePrograms: e.target.value } })}
                            placeholder="Enter notable programs (comma-separated)"
                            required
                        />
                        {errors.notablePrograms && <div className="invalid-feedback">{errors.notablePrograms}</div>}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-3">Add University</button>
            </form>
        </div>
    );
};

export default AddUniversity;
