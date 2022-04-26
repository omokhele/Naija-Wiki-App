import { Link } from 'react-router-dom';
// import Book from '../routes/Book';
const Form = ({book, handleSubmit, handleChange, cancelPath}) => {
    return(
        <div>   
        <form className="form" onSubmit={handleSubmit}>
            <label>Book</label>
            <input className="input"
            placeholder="Book"
            defaultValue={book.book}
            name="book"
            onChange={(e)=>handleChange(e)}
            /> 

            <input className="input"
            placeholder="Blurb"
            defaultValue={book.blurb}
            name="blurb"
            onChange={(e)=>handleChange(e)}
            /> 

            <input className="input"
            placeholder="Book Image"
            defaultValue={book.bookImage}
            name="bookImage"
            onChange={(e)=>handleChange(e)}
            /> 

            <input className="input"
            placeholder="Author"
            defaultValue={book.author}
            name="author"
            onChange={(e)=>handleChange(e)}
            /> 

            <input className="input"
            placeholder = "Bio"
            defaultValue={book.bio}
            name="bio"
            onChange={(e)=>handleChange(e)}
            /> 

            <input className="input"
            placeholder="Author Image"
            defaultValue={book.authorImage}
            name="authorImage"
            onChange={(e)=>handleChange(e)}
            /> 
            <button className="input" type="Submit">Submit</button>

            <Link to={cancelPath}>
                <button className="input">Cancel</button>
            </Link>
        </form>
        </div>
    
    )
}

export default Form