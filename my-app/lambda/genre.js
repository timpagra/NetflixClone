// import apiFunc from "../src/apis";
const {apiFunc} = require("../src/apis");

exports.handler = async function (event, context) {
  try {
    const endPoint = "https://api.themoviedb.org/3/genre/movie/list";
    const apiKey = process.env.REACT_APP_API_KEY;
    const params = "language=en-US";
    // make call
    const genres = await apiFunc(endPoint, apiKey, params);
    console.log("Genres ", genres);
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