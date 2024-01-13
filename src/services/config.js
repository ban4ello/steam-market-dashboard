// require("dotenv").config();

export default {
  // STEAM_API_URL=https://api.steamapis.com
  // STEAM_API_KEY=BsFGlfCGSSEf3SbxJO2bmfLxBvU

  // baseURL: `${process.env.STEAM_API_URL}`,
  baseURL: "https://api.steamapis.com",
  // baseURL: `http://localhost:${process.env.API_PORT}/`,
  // baseURL: "http://localhost:8000/",
  timeout: 1200000,
  // withCredentials: false,
  // responseType: "text",
  maxContentLength: 2000,
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  },
  maxRedirects: 5,
};
