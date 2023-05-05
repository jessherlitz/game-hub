import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8d44c8b9a546486e995afa1b9b6012ab",
  },
});
