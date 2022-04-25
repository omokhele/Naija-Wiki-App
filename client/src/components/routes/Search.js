import { useState, useEffect } from 'react';
import { fetchData } from '../../services/constants'

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
        
        <div>
           <input type="text" placeholder="Search Books" onChange={(e) => handleChange(e)}/>
            <input type="button" value="Enter" onClick={() => handleClick()} />
            <ul>
            <li>{searchResults.book} </li>
            <li>{searchResults.blurb}</li>
            <li>{searchResults.bookImage}</li>
            <li>{searchResults.author}</li>
            <li>{searchResults.bio}</li>
            <li>{searchResults.authorImage}</li>
            </ul>

            {/* {
                searchResults.map((searchResult, index) => {
                    const { book, blurb, bookImage, author, bio, authorImage} = searchResult
                    return <p>{book} {blurb} {bookImage} {author} {bio} {authorImage} {index}</p> 
                })
            } */}
        </div>
    )
}

export default Search