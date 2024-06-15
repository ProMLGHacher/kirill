import axios from "axios";

// export const $baseURL = 'https://stela-orenburg.ru'
export const $baseURL = 'https://rso-orenburg.ru:9000'

export const $api = axios.create({
    baseURL: $baseURL
})