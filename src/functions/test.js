import fetch from "node-fetch";

const API_ENDPOINT = "https://cosmicjs.com/420d3b00-6c69-11e9-8cf5-751dc054446f/export?pretty=true&read_key=zfhdrnxWQpEYiZasS8iAQpvYQhVUnKnk0JjEjJYJYJ2SfUGdOG";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};