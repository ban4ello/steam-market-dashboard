import ApiAuth from "@/services/ApiAuth";
// const STEAM_API_KEY = process.env.STEAM_API_KEY;

export default {
  getMarketStats() {
    // https://api.steamapis.com/market/stats?api_key=BsFGlfCGSSEf3SbxJO2bmfLxBvU
    return ApiAuth().get("/market/stats");
    // return ApiAuth().get("/market/stats");
    // return ApiAuth().get(`/market/stats?api_key=BsFGlfCGSSEf3SbxJO2bmfLxBvU`);
    // return ApiAuth().get(`/market/stats?api_key=${STEAM_API_KEY}`);
  },

  test() {
    return ApiAuth().get("/test");
    // return ApiAuth().get("/auth/steam");
  },
};
