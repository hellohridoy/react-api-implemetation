// src/components/ViewUniversity.js
import React, { useEffect, useState } from 'react';
import universityService from '../services/universityService';

const UniversityComponent = () => {
    const [universities, setUniversities] = useState([]);
    const [newUniversity, setNewUniversity] = useState({
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
            studentBody: 0,
            endowment: '',
            notablePrograms: []
        }
    });

    useEffect(() => {
        const fetchUniversityData = async () => {
            try {
                const data = await universityService.getUniversityData();
                setUniversities(data);
            } catch (error) {
                console.error('Error fetching university data', error);
            }
        };
        fetchUniversityData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const addedUniversity = await universityService.addUniversity(newUniversity);
            setUniversities([...universities, addedUniversity]);
            setNewUniversity({
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
                    studentBody: 0,
                    endowment: '',
                    notablePrograms: []
                }
            });
        } catch (error) {
            console.error('Error adding university', error);
        }
    };

    const handleValueChange = (field, value) => {
        setNewUniversity({
            ...newUniversity,
            value: {
                ...newUniversity.value,
                [field]: value
            }
        });
    };

    return (
        <div className="container">
            <h1 className="mt-4 mb-4 text-center">University Information</h1>

            {/* Display universities */}
            <div className="row">
                {universities.map((uni, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <div className="card h-100">
                            <span className="card-img-top" alt={uni.universityName} />
                            <div className="card-body">
                                <h5 className="card-title">{uni.universityName}</h5>
                                <p className="card-text">{uni.universityDescription}</p>
                                <p><strong>Type:</strong> {uni.universityType}</p>
                                <p><strong>Rating:</strong> {uni.universityRating}</p>
                                <p><strong>Address:</strong> {uni.universityAddress}</p>
                                <p><strong>Starting Date:</strong> {new Date(uni.startingDate).toDateString()}</p>
                                <p><strong>Campus Size:</strong> {uni.value?.campusSize || 'N/A'}</p>
                                <p><strong>Student Body:</strong> {uni.value?.studentBody || 'N/A'}</p>
                                <p><strong>Endowment:</strong> {uni.value?.endowment || 'N/A'}</p>
                                <p><strong>Notable Programs:</strong> {uni.value?.notablePrograms?.join(', ') || 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Form to add a new university */}
            <h2 className="mt-5 text-center">Add a New University</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>University Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter university name"
                                value={newUniversity.universityName}
                                onChange={(e) => setNewUniversity({...newUniversity, universityName: e.target.value})}
                                required
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>University Address</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter university address"
                                value={newUniversity.universityAddress}
                                onChange={(e) => setNewUniversity({...newUniversity, universityAddress: e.target.value})}
                                required
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>University Type</label>
                            <select
                                className="form-control"
                                value={newUniversity.universityType}
                                onChange={(e) => setNewUniversity({...newUniversity, universityType: e.target.value})}
                                required
                            >
                                <option value="">Select type</option>
                                <option value="PUBLIC">Public</option>
                                <option value="PRIVATE">Private</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>University Rating</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter university rating"
                                value={newUniversity.universityRating}
                                onChange={(e) => setNewUniversity({...newUniversity, universityRating: e.target.value})}
                                step="0.1"
                                min="0"
                                max="5"
                                required
                            />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group">
                            <label>University Description</label>
                            <textarea
                                className="form-control"
                                placeholder="Enter description"
                                value={newUniversity.universityDescription}
                                onChange={(e) => setNewUniversity({...newUniversity, universityDescription: e.target.value})}
                                required
                            />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group">
                            <label>University Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter image URL"
                                value={newUniversity.universityImage}
                                onChange={(e) => setNewUniversity({...newUniversity, universityImage: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Starting Date</label>
                            <input
                                type="date"
                                className="form-control"
                                value={newUniversity.startingDate}
                                onChange={(e) => setNewUniversity({...newUniversity, startingDate: e.target.value})}
                                required
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Casually Opens At</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                value={newUniversity.casuallyOpensAt}
                                onChange={(e) => setNewUniversity({...newUniversity, casuallyOpensAt: e.target.value})}
                                required
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Campus Size</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter campus size"
                                value={newUniversity.value.campusSize}
                                onChange={(e) => handleValueChange('campusSize', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Student Body</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter student body count"
                                value={newUniversity.value.studentBody}
                                onChange={(e) => handleValueChange('studentBody', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Endowment</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter endowment"
                                value={newUniversity.value.endowment}
                                onChange={(e) => handleValueChange('endowment', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Notable Programs (comma-separated)</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter notable programs"
                                value={newUniversity.value.notablePrograms.join(', ')}
                                onChange={(e) => handleValueChange('notablePrograms', e.target.value.split(',').map(item => item.trim()))}
                            />
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-4">Add University</button>
            </form>
        </div>
    );
};

export default UniversityComponent;
