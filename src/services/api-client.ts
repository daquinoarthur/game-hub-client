import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "756874ed7c8641a19dadb124905454b0",
  },
});
