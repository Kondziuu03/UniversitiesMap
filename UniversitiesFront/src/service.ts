import axios from "axios";

axios.defaults.baseURL = "http://localhost:5019/api/";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export function getUniversities() {
  return axios.get("university");
}

export function getUniversity(id: number) {
  return axios.get(`university/${id}`);
}

export function createUniversity(university: object) {
  return axios.post("university", university);
}

export function updateUniversity(id: number, university: object) {
  return axios.put(`university/${id}`, university);
}
