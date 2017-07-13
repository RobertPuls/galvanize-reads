let BASE_URL;
const currentURL = window.location.href;


(function getBaseURL() {
  if (window.location.hostname == "localhost") {
    BASE_URL = `http://localhost:3000`;
  } else {
    BASE_URL = `https://galvanize-read-server.herokuapp.com`;
  }
})();
