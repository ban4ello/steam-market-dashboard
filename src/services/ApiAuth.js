import axios from "axios";
import config from "./config";

export default () => {
  const ApiAuth = axios.create({
    ...config,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
      "Content-Type": "application/json",
    },
  });

  return ApiAuth;
};
