require("dotenv").config();
const express = require("express");
const {apiFunc} = require("./src/apis");

const PORT = process.env.PORT || 8080;
const app = express();


// Chaos Test
app.use("/", (req, res, next) => {
  console.log(`This request came through here 
    port: ${PORT},
    `);
  next();
});

// Get the list of available genres
app.get("/getGenreList", async (req, res) => {
  try {
    const endPoint = "https://api.themoviedb.org/3/genre/movie/list";
    const apiKey = process.env.API_KEY;
    const params = "language=en-US";
    // make call
    const genres = await apiFunc(endPoint, apiKey, params);
    if (genres) {
      res.status(200).json(genres);
    }
  } catch(error) {
    res.status(500).json(error);
  }
});

// Get movies based on user search term 
app.get("/getSearchTerm", async (req, res) => {
  try {
    const endPoint = "https://api.themoviedb.org/3/search/movie";
    const apiKey = process.env.API_KEY;
    const searchQuery = req.query.query;
    const params = `language=en-US&query=${searchQuery}&page=1&include_adult=false`;
    // make call
    const searchResult = await apiFunc(endPoint, apiKey, params);

    if (searchResult) {
      res.status(200).json(searchResult);
    } 
  } catch (error) {
    res.status(500).json(error);
  } 
});

// Get list of movies by selected genre
app.get("/getSelectedGenre", async (req, res) => {
  try {
    const endPoint = "https://api.themoviedb.org/3/discover/movie";
    const apiKey = process.env.API_KEY;
    const genreId = req.query.genreId;
    const params = `language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`;
    // make call
    const genreResultList = await apiFunc(endPoint, apiKey, params);

    if (genreResultList) {
      res.status(200).json(genreResultList);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get list of movies Discover movies
app.get("/getDiscoverList", async (req, res) => {
  try {
    const endPoint = "https://api.themoviedb.org/3/discover/movie";
    const apiKey = process.env.API_KEY;
    const params = "language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2";

    // api call
    const movies = await apiFunc(endPoint, apiKey, params);
    if (movies) {
      res.status(200).json(movies.results);
    }
  } catch (error) {
    res.status(200).send(res);
  }
});

// Ping Test
app.get("/ping", (req, res) => {
  res.status(200).json({"pong": "hi there"});
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json("error");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));