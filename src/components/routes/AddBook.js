import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Books from './Books';
import Form from '../layout/Form';
import apiUrl from '../../api';

function AddBook() {
    const navigate = useNavigate();
    const [book, setBook] = useState({
        book: "",
        blurb: "",
        bookImage: "",
        author: "",
        bio: "",
        authorImage: ""
    })

    const [createdBook, setCreatedBook] = useState(null)

    const handleChange = (event) => {
        const addedField = { [event.target.name] : event.target.value }
        const addedBook = Object.assign(book, addedField)
        setBook(addedBook)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios({
            url: `${apiUrl}/details`,
            method: 'POST',
            data: book,
        }).then(res => setCreatedBook(res.data)).catch(console.error)
        console.log("added")
    
    }

    useEffect(() => {
        if (createdBook) {
            return navigate(`/books`)
        }
    }, [book, createdBook, navigate])

    return (       
       <div> 
    
    <Form
        book ={book}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath = '/'
    />
        </div>
    )
    }
    export default AddBook