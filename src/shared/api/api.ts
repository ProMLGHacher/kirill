import axios from "axios";

export const $baseURL = 'https://stela-orenburg.ru'

export const $api = axios.create({
    baseURL: $baseURL
})