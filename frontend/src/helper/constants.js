import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export const SERVER_LOCAL = "http://127.0.0.1:8000";

export const client = axios.create({
  baseURL: SERVER_LOCAL,
});
