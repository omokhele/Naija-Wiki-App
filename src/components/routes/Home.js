import { useState, useEffect } from 'react';
import { data } from '../../services/constants'
import '../../App.css'


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
            <ul className="row box">
{(displayData || []).map((display, index) => { 
      const { book, blurb, bookImage, author, bio, authorImage} = display
    return  <div className="col-3 mt-5 whiteSpace" key={index} >
        <div className="content1">
        <img src={bookImage} alt="books" className="img-fluid mb-4 images"/>
        <div className="content">
        <div className="fs-4 fw-bold mb-4">{book}</div>
        <hr></hr>
        <div className="content">
        <div className="fs-6">{blurb}</div>
        <hr></hr>
        <img src={authorImage} alt="author" className="img-fluid mb-4"/> 
        <div className="content4">
        <div className="fs-6 fw-bold mb-4">{author} </div>
        <hr></hr>
        <div className="fs-6">{bio}  
        </div>
        </div>
        </div> 
        </div>
        </div>
      </div>
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