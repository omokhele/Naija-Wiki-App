import { useState, useEffect } from 'react';
import { covidData, data } from '../../services/constants'


const Home = () => {


const [cData, setCData] = useState([]);

const fetchData = async () => {
    let answer = await covidData();
    // console.log(answer.data.data.states);
}

const [displayData, setDisplayData] = useState([])
const displayedData = async () => {
    let result = await data();
    setDisplayData(result.data.details)
    console.log(result.data.details)
}

useEffect(() => {
    fetchData();
    displayedData()
}, [])
 

    return(
        <div>
            {/* <ul>
{(displayData).map((display, index) => {
    const {culture, entertainment, people, places} = display;
    return <li key={index}>{culture} {entertainment} {people} {places}</li>
})}
            </ul> */}
        </div>
    ) 
}

export default Home