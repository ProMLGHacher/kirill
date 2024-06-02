import axios from "axios";

export const $baseURL = ''

export const $api = axios.create({
    baseURL: $baseURL
})