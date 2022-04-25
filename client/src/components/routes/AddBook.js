import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function AddBook() {
    const navigate = useNavigate();
    const [addBook, setAddBook] = useState({
        book: "",
        blurb: "",
        bookImage: "",
        author: "",
        bio: "",
        authorImage: ""
    })

    const [createdBook, setCreatedBook] = useState(null)

    const handleChange = (event) => {
        const updatedField = { [event.target.name] : event.target.value }
        const addedBook = Object.assign(addBook, updatedField)
        setAddBook(addedBook)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //if entry is created in the database, save response data in state
        axios({
            url: `localhost:3000/api/details`,
            method: 'POST',
            data: addBook
        }).then(res => setCreatedBook(res.data.detail)).catch(console.error)
    
    }

    useEffect(() => {
        if (createdBook) {
            return navigate(`/details`)
        }
    }, [createdBook, navigate])

    return (
       <div>
           {/* {book} 
           handleChange={(e) => handleChange(e)} 
           handleSubmit={(e) => handleSubmit(e)} 
           {cancelPath = '/'} */}

<form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter book title" defaultValue={addBook.book} name="book" onChange={(e) =>  handleChange(e)}/>
      <button type="submit" >Submit</button>

      {/* <Link to={cancelPath}>
        <button>Cancel</button>
      </Link> */}
    </form>
        </div>
    )

    }
    export default AddBook