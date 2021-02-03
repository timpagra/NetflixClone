const fetch = require("node-fetch");

/**
 * Makes an api call to a specified path with some params
 * @param {string} path 
 * @param {string} params 
 * @param {Number} api_key 
 */
exports.apiFunc = async function (path, api_key, params) {
  try {
    const response = await fetch(`${path}?api_key=${api_key}&${params}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};


