import React, { useEffect, useState } from 'react';
import universityService from '../services/universityService';
import { useNavigate, useParams } from "react-router-dom";

const ViewUniversity = () => {
    const { id } = useParams(); // Get the university ID from the URL
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
        },
        teachers: [],
        students: [],
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

    useEffect(() => {
        if (id) {
            // Fetch university data by ID if editing
            const fetchUniversityById = async () => {
                try {
                    const data = await universityService.getUniversityById(id);
                    setNewUniversity(data); // Populate the form with fetched data
                } catch (error) {
                    console.error('Error fetching university data:', error);
                }
            };
            fetchUniversityById();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                // Update existing university if ID is present
                await universityService.updateUniversity(id, newUniversity);
                alert('University updated successfully!');
            } else {
                // Add a new university if no ID
                const addedUniversity = await universityService.addUniversity(newUniversity);
                setUniversities([...universities, addedUniversity]);
            }

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
                },
                teachers: [],
                students: [],
            });
        } catch (error) {
            console.error('Error submitting university data', error);
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

    const navigate = useNavigate();

    const handleUpdate = (id) => {
        // Navigate to the edit page with the university ID
        navigate(`/universities/edit/${id}`);
        handleValueChange();
    };

    const handleDelete = async (id) => {
        try {
            await universityService.deleteUniversity(id);
            setUniversities(universities.filter(uni => uni.id !== id));
        } catch (error) {
            console.error('Error deleting university', error);
        }
    };

    return (
        <div className="container">
            <h1 className="mt-4 mb-4 text-center">University Information</h1>

            <div className="row">
                {universities.map((uni, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{uni.universityName}</h5>
                                <p>{uni.universityDescription}</p>
                                <div className="d-flex justify-content-center mt-3">
                                    <button
                                        className="btn btn-primary mx-2"
                                        onClick={() => handleUpdate(uni.id)}

                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-danger mx-2"
                                        onClick={() => handleDelete(uni.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="mt-5 text-center">{id ? 'Edit University' : 'Add a New University'}</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="row">
                    {/* Form fields similar to the previous code */}
                    {/* Example of the University Name field */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>University Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter university name"
                                value={newUniversity.universityName}
                                onChange={(e) => setNewUniversity({ ...newUniversity, universityName: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                    {/* Add other fields similarly, handling their states */}
                </div>
                <button type="submit" className="btn btn-primary mt-4">{id ? 'Update' : 'Add'} University</button>
            </form>
        </div>
    );
};

export default ViewUniversity;
