const axios = require("axios");

/**
 * Makes an api call to a specified path with some params
 * @param {string} path 
 * @param {string} params 
 * @param {Number} api_key 
 * new line added
 */
exports.apiFunc = async function (path, api_key, params) {
  try {
    const response = await axios(`${path}?api_key=${api_key}&${params}`, { headers: { Accept: "application/json" } } );
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
};


