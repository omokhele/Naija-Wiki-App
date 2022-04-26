import { NavLink } from 'react-router-dom'
import '../../App.css'

const Header = () => {
    return(
        <div className="header ">
        <h1 className="text-center ubuntu my-4"><b>Nigerian Books <span className="title"> | WiKi</span></b></h1>
        <nav className="text-center">
        <NavLink to='/' className="navLink">HOME</NavLink>
        <NavLink to='/about' className="navLink">ABOUT</NavLink>
        <NavLink to='/search' className="navLink">SEARCH</NavLink>
       
        <NavLink to='/books' className="navLink">BOOKS</NavLink>
        <NavLink to='/addBook' className="navLink">ADD BOOK</NavLink>
        
    </nav>
    </div>
    )
}

export default Header