// DashBoardService.js
import axios from "axios";

const API_URL = "http://localhost:8080/v1/university/university-infos/data";

export const getDashboardDetails = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch dashboard details:", error);
        throw error;
    }
};
