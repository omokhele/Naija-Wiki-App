import { useState, useEffect } from 'react';
import { fetchData } from '../../services/constants'
import '../../App.css'

const Search = () => {
    const [searchResults, setSearchResults] = useState([]);
        const [search, setSearch] = useState('');
    
        function handleChange(e) {
            e.preventDefault();
            setSearch(e.target.value);
        }

        async function handleClick() {
            // e.preventDefault();
            let answer = await fetchData(search);
            answer? setSearchResults(answer.data.detail) : setSearchResults("Result not found")
            console.log(answer.data.detail);
            console.log(search)
        }

        useEffect(() => {
            // handleClick();
        }, [] )


        

    return (
        
        <form className="justify-content-center form gap-4 mb-5">
            <div  className="searchDiv">
           <input type="text" placeholder="Search Books" className="inputSearch" onChange={(e) => handleChange(e)}/>
            <input type="button" value="Enter" className= "inputButton fs-5" onClick={() => handleClick()} />
            </div>
            {
                searchResults.map((searchResult, index) => {
                    const { book, blurb, bookImage, author, bio, authorImage} = searchResult
                    return <div className="div1">
        <img src={bookImage} alt="books" className="searchImage"/>
        {/* <div className="content"> */}
        <div className="container">
        <h4 className="fs-4 fw-bold mb-4 text-start book">{book}</h4>
        <p className="fs-6 blurb text-start">{blurb}</p>
        <img src={authorImage} alt="author" className="authorImage float-start"/> 
        {/* <div className="content3"> */}
        <h4 className="fs-6 fw-bold mb-4 text-start author">{author} </h4>
        <p className="fs-6 text-start bio">{bio}</p>
        {/* </div> */}
        </div> 
        </div>
        // </div>
                })
            }
        </form>
    )
}

export default Search