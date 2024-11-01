// DashBoardService.js
import axios from "axios";

const API_URL = "http://localhost:9000/v1/university/university-infos/data";
const API_URL_TEACHER_DD = "http://localhost:9000/v1/university/university-infos/teacher-dashboard-details"

export const getDashboardDetails = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch dashboard details:", error);
        throw error;
    }
};

export const getDashBoardDetailsForTeacher = async  () =>{
    try {
        const response = await axios.get(API_URL_TEACHER_DD);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch dashboard details:", error);
        throw error;
    }
}
