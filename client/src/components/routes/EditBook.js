import { useState, useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios'
import Form from '../layout/Form';
import Book from './Book';

function EditBook() {
    const navigate = useNavigate();
    const {id} = useParams()
    const [book, setBook] = useState({
        book: "",
        blurb: "",
        bookImage: "",
        author: "",
        bio: "",
        authorImage: "",
    })


const [edited, setEdited] = useState(false)

useEffect(()=> {
    const fetchData = async() => {
    try{
        const response = await axios(`http://localhost:3000/api/details/${id}`)
        console.log('editBook', response.data.detail);
        setBook(response.data.detail)
    }catch (err) {
        console.error(err)
    }
}
fetchData()
}, [id])


const handleChange = (event) => {
    const editedField = { [event.target.name] : event.target.value }
    const editedBook = Object.assign(book, editedField)
    setBook(editedBook)
}

const handleSubmit = (event) => {
    event.preventDefault()
    axios({
        url: `http://localhost:3000/api/details/${id}`,
        method: 'PUT',
        data: book
    }).then(() => setEdited(true)).catch(console.error)

}

useEffect(() => {
    if (edited) {
        return navigate(`/books/${id}`)
    }
}, [id, navigate, edited])

return (
    <div>
<Book>
    <Form
book ={book}
// blurb ={book.blurb}
// bookImage={book.bookImage}
// author={book.author}
// bio={book.bio}
authorImage={book.authorImage}
handleChange={(e) => handleChange(e)}
handleSubmit={(e) => handleSubmit(e)}
cancelPath = {`/books/${id}`}
/>
</Book>
    </div>
)
}

export default EditBook

