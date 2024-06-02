import axios from "axios";

export const $baseURL = 'http://82.97.249.229/'

export const $api = axios.create({
    baseURL: $baseURL
})