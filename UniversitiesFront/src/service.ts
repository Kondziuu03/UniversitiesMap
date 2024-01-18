import axios from "axios";

axios.defaults.baseURL = "http://localhost:5019/api/";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export function getUniversities() {
  return axios.get("university");
}
