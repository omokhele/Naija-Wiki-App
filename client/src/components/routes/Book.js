import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
// import { data } from '../../services/constants'

function Book () {

    const [book, setBook] = useState([])
    const [deleted, setDeleted] = useState(false)
    const { id } = useParams();
    console.log('params', id)
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios(`http://localhost:3000/api/details/${id}`)
                setBook(response.data.detail)
            }catch(error) {
                console.error(error)
            }
        }
        fetchData()
    }, [id])

    useEffect(()=> {
        if(!book) {
            return <p>Loading...</p>
        }
    }, [book])

    const destroy = () => {
        axios({
            url: `http://localhost:3000/api/details/${id}`,
            method: 'DELETE'
        }).then(()=> setDeleted(true)).catch(console.error)
        
    }

    useEffect(() => {
        if(deleted) {
            console.log("deleted")
            return navigate("/books")
        }
    }, [deleted, navigate])

     return(
        <div >
            {/* {book.map((doc, index) => {
                    const { book, blurb, bookImage, author, bio, authorImage, id} = doc
                    return <p>{book}</p>})}  */}
            <div className="flexBox">
            <img src={book.bookImage} alt="books" className="imageBook"/>
            <h4 className="fs-4 fw-bold mb-4 text-start bookBook">{book.book}</h4> 
            <p className="fs-6 blurbBook text-start">{book.blurb}</p> 
            <img src={book.authorImage} alt="books" className="authorBook"/>
            <h4 className="fs-6 fw-bold mb-4 authorAuthor">{book.author}</h4> 
            <p className="fs-6 text-start bioBook">{book.bio}</p> 
            <h6>{book.id}</h6> 
            </div>

            <div className="function">
            <NavLink to={`/books/${id}/editBook`}> 
            <button>Edit Book</button>
            </NavLink>  
            
            <button className="destroy" onClick={()=> destroy()}>Delete Book</button>
            
            <NavLink to="/books">Back to books</NavLink>  
            </div>
        </div>
    )
}


export default Book


