import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const BASE_URL = "https://youtube138.p.rapidapi.com";
="https://youtube138.p.rapidapi.com";

const options = {
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching API data:", error);
    throw error;
  }
};
// ////
// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://youtube138.p.rapidapi.com/auto-complete/',
//   params: {
//     q: 'desp',
//     hl: 'en',
//     gl: 'US'
//   },
//   headers: {
//     'x-rapidapi-key': '777fa353d0msh0d84b8431cd378ap13d987jsn66a04aaaaa13',
//     'x-rapidapi-host': 'youtube138.p.rapidapi.com'
//   }
// };

// async function fetchData() {
// 	try {
// 		const response = await axios.request(options);
// 		console.log(response.data);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// fetchData();
