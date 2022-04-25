import { useState, useEffect } from 'react';
import { covidData, data } from '../../services/constants'

const Home = () => {

// const [cData, setCData] = useState([]);

// const fetchData = async () => {
//     let answer = await covidData();
//     setCData(answer.data.data.states);
//     console.log(answer.data.data.states);
// }

const [displayData, setDisplayData] = useState([])
const displayedData = async () => {
    let result = await data();
    setDisplayData(result.data.details)
    // setDisplayData(result.data.details[1].culture)
    console.log(result.data.details)
}

useEffect(() => {
    // fetchData();
    displayedData()
}, [])

    return(
        <div className="container">      
           {/* tribe: {displayData.tribe},
           language"{displayData.music},
           {displayData.religion} */}
            <ul className="row">
{(displayData || []).map((display, index) => { 
      const { book, blurb, bookImage, author, bio, authorImage} = display
    return  <div className="col-3"><li key={index}> {book} {blurb} {bookImage}, {author} {bio} {authorImage} </li></div>
})}
<div className="col-8"></div>
        </ul>    

            {/* <h4>Covid Cases</h4>
            <ul>
{(cData).map((c, ) => { 
    const { state, confirmedCases, casesOnAdmission, discharged } = c  
    return <p > State: {state} Cases: {confirmedCases} {casesOnAdmission} Discharged:{discharged} </p>
    
})}
            </ul> */}
        </div>
    ) 
}

export default Home