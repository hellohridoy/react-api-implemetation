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
            notablePrograms: []
        }
    });

    const handleChange = (e) => {
        setUniversity({ ...university, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert notablePrograms string to an array
        const notablePrograms = university.notablePrograms.split(',').map(program => program.trim());

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
                            className="form-control"
                            id="universityName"
                            name="universityName"
                            value={university.universityName}
                            onChange={handleChange}
                            placeholder="Enter university name"
                        />
                    </div>
                </div>

                {/* University Address */}
                <div className="form-group row">
                    <label htmlFor="universityAddress" className="col-sm-2 col-form-label">University Address</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="universityAddress"
                            name="universityAddress"
                            value={university.universityAddress}
                            onChange={handleChange}
                            placeholder="Enter university address"
                        />
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
                            className="form-control"
                            id="universityRating"
                            name="universityRating"
                            value={university.universityRating}
                            onChange={handleChange}
                            placeholder="Enter rating (e.g., 4.6)"
                        />
                    </div>
                </div>

                {/* University Description */}
                <div className="form-group row">
                    <label htmlFor="universityDescription" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control"
                            id="universityDescription"
                            name="universityDescription"
                            rows="3"
                            value={university.universityDescription}
                            onChange={handleChange}
                            placeholder="Enter university description"
                        />
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
                            className="form-control"
                            id="startingDate"
                            name="startingDate"
                            value={university.startingDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Casually Opens At */}
                <div className="form-group row">
                    <label htmlFor="casuallyOpensAt" className="col-sm-2 col-form-label">Casually Opens At</label>
                    <div className="col-sm-10">
                        <input
                            type="datetime-local"
                            className="form-control"
                            id="casuallyOpensAt"
                            name="casuallyOpensAt"
                            value={university.casuallyOpensAt}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Campus Size */}
                <div className="form-group row">
                    <label htmlFor="campusSize" className="col-sm-2 col-form-label">Campus Size</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="campusSize"
                            name="campusSize"
                            value={university.campusSize}
                            onChange={handleChange}
                            placeholder="Enter campus size"
                        />
                    </div>
                </div>

                {/* Student Body */}
                <div className="form-group row">
                    <label htmlFor="studentBody" className="col-sm-2 col-form-label">Student Body</label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            id="studentBody"
                            name="studentBody"
                            value={university.studentBody}
                            onChange={handleChange}
                            placeholder="Enter number of students"
                        />
                    </div>
                </div>

                {/* Endowment */}
                <div className="form-group row">
                    <label htmlFor="endowment" className="col-sm-2 col-form-label">Endowment</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="endowment"
                            name="endowment"
                            value={university.endowment}
                            onChange={handleChange}
                            placeholder="Enter endowment amount"
                        />
                    </div>
                </div>

                {/* Notable Programs */}
                <div className="form-group row">
                    <label htmlFor="notablePrograms" className="col-sm-2 col-form-label">Notable Programs</label>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control"
                            id="notablePrograms"
                            name="notablePrograms"
                            value={university.notablePrograms}
                            onChange={handleChange}
                            placeholder="Enter notable programs separated by commas (e.g., Program 1, Program 2)"
                            rows="3"
                        />
                        <small className="form-text text-muted">Use comma-separated format, e.g., Program 1, Program 2</small>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="form-group row mt-3">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddUniversity;
