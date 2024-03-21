import axios from "axios";

const baseURL = "/api";

const http = axios.create({
  baseURL,
});

export default http;
