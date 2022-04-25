import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <div>
    <nav>
        <h3>Wiki App</h3>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/search'>Search</NavLink>
    </nav>
    <nav>
        <NavLink to='/books'>Books</NavLink>
        <NavLink to='/addBook'>Add Book</NavLink>
        <NavLink to='/editBook'>Edit Book</NavLink>
    </nav>
    </div>
    )
}

export default Header