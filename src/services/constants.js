import axios from 'axios'
import apiUrl from '../api';

export const data = async()  => {
    try{
        const response = await axios.get(`${apiUrl}/details`)
        // console.log(response)
        return response;
    } catch(error) {
        console.log(error);
    }
}

export const fetchData = async(input)  => {
    try{
        const response = await axios.get(`${apiUrl}/search/${input}`)
        // console.log(response)
        return response;
    } catch(error) {
        console.log(error);
    }
}



export const covidData = async() => {
    try{
    const res = await axios.get("https://covidnigeria.herokuapp.com/api")
    // console.log(res)
    return res;
    } catch(error) {
        console.log(error)
    }
}