import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1"


export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`)
    // console.log(data)
    // console.log(typeof (data));
    return data
}
