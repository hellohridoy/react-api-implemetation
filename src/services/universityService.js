import axios from 'axios';
import { BASE_URL } from '../constant/apiConstants'; // Import the base URL

const API_URL = `${BASE_URL}/v1/university/university-infos`; // Concatenate base URL with endpoint
const GET_URL = `${BASE_URL}/v1/university/universities-infos`; // Concatenate base URL with endpoint

const universityService = {

    // Fetch university data (GET request)
    getUniversityData: async () => {
        try {
            const response = await axios.get(GET_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching university data:', error);
            throw error; // Rethrow the error for further handling
        }
    },

    // Add university data (POST request)
    addUniversity: async (universityData) => {
        try {
            const response = await axios.post(API_URL, universityData);
            return response.data;
        } catch (error) {
            console.error("There was an error submitting the university data!", error);
            throw error; // Rethrow the error for further handling if needed
        }
    }
};

export default universityService;
