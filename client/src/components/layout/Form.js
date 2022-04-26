import { Link } from 'react-router-dom';
// import Book from '../routes/Book';
const Form = ({book, handleSubmit, handleChange, cancelPath}) => {
    return(
        <div>   
        <form onSubmit={handleSubmit}>
            <label>Book</label>
            <input
            placeholder="Book"
            defaultValue={book.book}
            name="book"
            onChange={(e)=>handleChange(e)}
            /> 

            <input
            placeholder="Blurb"
            defaultValue={book.blurb}
            name="blurb"
            onChange={(e)=>handleChange(e)}
            /> 

            <input
            placeholder="Book Image"
            defaultValue={book.bookImage}
            name="bookImage"
            onChange={(e)=>handleChange(e)}
            /> 

            <input
            placeholder="Author"
            defaultValue={book.author}
            name="author"
            onChange={(e)=>handleChange(e)}
            /> 

            <input
            placeholder = "Bio"
            defaultValue={book.bio}
            name="bio"
            onChange={(e)=>handleChange(e)}
            /> 

            <input
            placeholder="Author Image"
            defaultValue={book.authorImage}
            name="authorImage"
            onChange={(e)=>handleChange(e)}
            /> 
            <button type="Submit">Submit</button>

            <Link to={cancelPath}>
                <button>Cancel</button>
            </Link>
        </form>
        </div>
    
    )
}

export default Form