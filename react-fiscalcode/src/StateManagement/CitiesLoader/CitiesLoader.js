import axios from "axios"

const PROXY_URL = "http://cors-anywhere.herokuapp.com"
const URL = "/http://www.istat.it/storage/codici-unita-amministrative/Elenco-comuni-italiani.csv"
const http = axios.create({
    baseURL: PROXY_URL,
    responseType: 'text',
    headers: {
        'content-type': 'text/plain; charset=ISO-8859-1'
    }
})
const PROVINCE_NAME = 11
const PROVINCE_ACRONYM = 14
const CITY_NAME = 5
const CITY_CODE = 19

export const fetchCities = async () => {
    const response = await http.get(URL)
    var provinces = []
    const cities = []
    response.data.split('\n').slice(3)
        .forEach(e => {
            const parts = e.split(';')
            provinces.push(JSON.stringify({ name: parts[PROVINCE_NAME], acronym: parts[PROVINCE_ACRONYM] }))
            cities.push({ name: parts[CITY_NAME], acronym: parts[PROVINCE_ACRONYM], code: parts[CITY_CODE] })
        });
    provinces = [...new Set(provinces)].map(p => JSON.parse(p)).filter(p => p?.acronym)
    provinces.sort((a, b) => a.name > b.name ? 1 : -1)
    return { provinces: provinces, cities: cities }
}