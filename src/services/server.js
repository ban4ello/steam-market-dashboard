const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;
const STEAM_API_KEY = process.env.STEAM_API_KEY;
const STEAM_API_URL = process.env.STEAM_API_URL;

app.get("/market/stats", (_, res) => {
  axios
    .get(`${STEAM_API_URL}/market/stats?api_key=${STEAM_API_KEY}`)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error.response.status, error.response.statusText);
      res
        .status(error.response.status)
        .json({ message: error.response.statusText });

      // res.json({
      //   status: error.response.status,
      //   statusText: error.response.statusText,
      // });
    });
});

app.listen(PORT, () => {
  console.log(`SteamAPI server was started on port: ${PORT}`);
});
