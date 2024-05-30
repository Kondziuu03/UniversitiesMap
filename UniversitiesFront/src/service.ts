import axios from "axios";

axios.defaults.baseURL = "https://localhost:7203/api/";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export function getUniversities() {
  return axios.get("university");
}

export function getUniversity(id: number) {
  return axios.get(`university/${id}`);
}

export interface CreateUniversity {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  websiteUrl: string;
  category: number;
  email: string;
  phoneNumber: string;
  address: {
    city: string;
    street: string;
    postalCode: string;
  };
}

export function createUniversity(university: CreateUniversity) {
  return axios.post("university", university);
}

export interface UpdateUniversity {
  id: number;
  name?: string;
  description?: string;
  websiteUrl?: string;
  email?: string;
  phoneNumber?: string;
}

export function updateUniversity(university: UpdateUniversity) {
  return axios.put(`university/${university.id}`, university);
}

export interface Login {
  email: string;
  password: string;
}

export function login(user: Login) {
  return axios.post("login", user);
}

export interface Register {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export function register(user: Register) {
  return axios.post("register", user);
}

export function getRates(universityId: number) {
  return axios.get(`university/rates/{${universityId}}`);
}

export interface Rate {
  rateValue: number;
  comment: string;
  userId: number;
  universityId: number;
}

export function createRate(rate: Rate) {
  return axios.post("rates", rate);
}
