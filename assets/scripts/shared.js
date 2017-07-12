let BASE_URL;

(function getBaseURL() {
  if (window.location.hostname == "localhost") {
    BASE_URL = `http://localhost:3000`;
  } else {
    BASE_URL = `https://galvanize-read-server.herokuapp.com`;
  }
})();

module.exports = BASE_URL;
