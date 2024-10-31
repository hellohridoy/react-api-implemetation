import axios from 'axios';
import { BASE_URL } from '../constant/apiConstants'; // Import the base URL

// Define the API endpoints
const API_URL = `${BASE_URL}/v1/university/university-infos`; // Main endpoint for adding university data
const GET_URL = `${BASE_URL}/v1/university/universities-infos`; // Endpoint for fetching all university data
const UPDATE_URL = `${BASE_URL}/v1/university/universities-infos`; // Update endpoint

const universityService = {
    // Fetch all university data (GET request)
    getUniversityData: async () => {
        try {
            const response = await axios.get(GET_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching university data:', error);
            throw error; // Rethrow for further handling
        }
    },

    // Add new university data (POST request)
    addUniversity: async (universityData) => {
        try {
            const response = await axios.post(API_URL, universityData);
            return response.data;
        } catch (error) {
            console.error("There was an error submitting the university data!", error);
            throw error; // Rethrow for further handling if needed
        }
    },

    // Fetch a university by ID (GET request)
    getUniversityById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching university data with ID ${id}:`, error);
            throw error; // Rethrow the error for further handling
        }
    },

    // Update university data by ID (PUT request)
    updateUniversity: async (id, universityData) => {
        try {
            const response = await axios.put(`${UPDATE_URL}/${id}`, universityData);
            return response.data;
        } catch (error) {
            console.error(`Error updating university data with ID ${id}:`, error);
            throw error; // Rethrow the error for further handling
        }
    }
};

export default universityService;
