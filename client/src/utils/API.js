import axios from "axios";

// Export the method used for accessing the google API.

export default {
  bookSearch: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
  }
};
