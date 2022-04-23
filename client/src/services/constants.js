import axios from 'axios'

export const data = async()  => {
    try{
        const response = await axios.get("http://localhost:3000/api/details")
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