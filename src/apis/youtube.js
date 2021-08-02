import axios from "axios";

const KEY = "AIzaSyCshklihalnL6_bIV2-N5nMkYFJLcXeOEA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
