import axios from 'axios';
const today = new Date().toISOString().split('T')[0];
const API_URL = `http://localhost:5000/api/articles/today-history/${today}`;

export const getTodayHistory = async () => {
  try {
    const res = await axios.get(API_URL);
    // console.log("history of the day", res);
    // console.log("history of the day", res.data);
    return res.data;
  } catch (err) {
    console.error('Error fetching history:', err);
    return [];
  }
};
