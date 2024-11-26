import axios from "axios"

const PROXY_URL = "http://cors-anywhere.herokuapp.com"
const URL = "https://www.istat.it/storage/codici-unita-amministrative/Elenco-comuni-italiani.csv"
const http = axios.create({
    baseURL: PROXY_URL
})
export const fetchCities = async () => {
    console.log("fetching")
    const response = await http.get(URL)
    console.log(response)
    response.data.split('\n')
        .forEach(element => {
            console.log(element)
        });
    return { provinces: [], cities: [] }
}