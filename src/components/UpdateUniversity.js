import React, { useState, useEffect } from 'react';
import universityService from '../services/universityService';
import {useParams} from "react-router-dom"; // Import the service for API calls

const UpdateUniversity = ({ universityId }) => {
    const { id } = useParams(); // Get the university ID from the URL
    const [university, setUniversity] = useState({
        universityName: '',
        universityAddress: '',
        universityType: '',
        universityRating: 0,
        universityDescription: '',
        universityImage: '',
        startingDate: '',
        casuallyOpensAt: '',
        value: {
            campusSize: '',
            studentBody: '',
            endowment: '',
            notablePrograms: [],
        }
    });

    // Fetch the existing university data on component mount
    useEffect(() => {
        const fetchUniversityData = async () => {
            try {
                const data = await universityService.getUniversityById(id);
                setUniversity(data);  // Make sure data structure is correct
            } catch (error) {
                console.error('Error fetching university data', error);
            }
        };
        fetchUniversityData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await universityService.updateUniversity(id, university);
            alert('University data updated successfully!');
        } catch (error) {
            console.error('Error updating university data', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUniversity({ ...university, [name]: value });
    };

    const handleValueChange = (field, value) => {
        setUniversity({
            ...university,
            value: {
                ...university.value,
                [field]: value
            }
        });
    };

    if (!university) {
        return <div>Loading university data...</div>;
    }

    return (
        <div className="container mt-5">
            <h2>Edit University</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>University Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="universityName"
                        value={university.universityName || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>University Address</label>
                    <input
                        type="text"
                        className="form-control"
                        name="universityAddress"
                        value={university.universityAddress || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>University Type</label>
                    <select
                        className="form-control"
                        name="universityType"
                        value={university.universityType || ''}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select type</option>
                        <option value="PUBLIC">Public</option>
                        <option value="PRIVATE">Private</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>University Rating</label>
                    <input
                        type="number"
                        className="form-control"
                        name="universityRating"
                        value={university.universityRating || 0}
                        onChange={handleChange}
                        step="0.1"
                        min="0"
                        max="5"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>University Description</label>
                    <textarea
                        className="form-control"
                        name="universityDescription"
                        value={university.universityDescription || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>University Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        name="universityImage"
                        value={university.universityImage || ''}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Starting Date</label>
                    <input
                        type="date"
                        className="form-control"
                        name="startingDate"
                        value={university.startingDate || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Casually Opens At</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        name="casuallyOpensAt"
                        value={university.casuallyOpensAt || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <h4>Additional Information</h4>

                <div className="form-group">
                    <label>Campus Size</label>
                    <input
                        type="text"
                        className="form-control"
                        value={university?.value?.campusSize || ''}
                        onChange={(e) => handleValueChange('campusSize', e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Student Body</label>
                    <input
                        type="number"
                        className="form-control"
                        value={university?.value?.studentBody || ''}
                        onChange={(e) => handleValueChange('studentBody', e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Endowment</label>
                    <input
                        type="text"
                        className="form-control"
                        value={university?.value?.endowment || ''}
                        onChange={(e) => handleValueChange('endowment', e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Notable Programs (comma-separated)</label>
                    <input
                        type="text"
                        className="form-control"
                        value={university?.value?.notablePrograms?.join(', ') || ''}
                        onChange={(e) => handleValueChange('notablePrograms', e.target.value.split(',').map(item => item.trim()))}
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Update University</button>
            </form>
        </div>
    );
};

export default UpdateUniversity;
