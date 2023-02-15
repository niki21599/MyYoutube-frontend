import axios from "axios";
let API_KEY = "AIzaSyDJoyxQmOqKwodfCPi1BbMI1gpPNIaQJ6Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 12,
    key: API_KEY,
  },
});
