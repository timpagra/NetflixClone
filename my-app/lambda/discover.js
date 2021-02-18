// import apiFunc from "../src/apis";
const {apiFunc} = require("../src/apis");

// This is a fun comment

exports.handler = async function (event, context) {
  try {
    const endPoint = "https://api.themoviedb.org/3/discover/movie";
    const apiKey = process.env.REACT_APP_API_KEY;
    const params = "language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2";
    // make call
    const genres = await apiFunc(endPoint, apiKey, params);
    console.log("Discover ", genres);
    if (genres) {
      return {
        statusCode: 200,
        body: JSON.stringify({genres: genres})
      };
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({msg: error.message})
    };
  }
};