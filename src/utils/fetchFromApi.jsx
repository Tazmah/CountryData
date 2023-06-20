import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1"


export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`)
    return data
}
