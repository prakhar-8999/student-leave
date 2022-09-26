import axios from "axios";

const baseurl = 'https://b4eb-125-21-249-98.in.ngrok.io/';

const apihit = axios.create({
    baseURL: baseurl,
    withCredentials: true
});

export default apihit;