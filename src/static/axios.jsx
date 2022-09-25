import axios from "axios";

const baseurl = 'https://d665-103-77-186-10.in.ngrok.io/';

const apihit = axios.create({
    baseURL: baseurl,
    withCredentials: true
});

export default apihit;