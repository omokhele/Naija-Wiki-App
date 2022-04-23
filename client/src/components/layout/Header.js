import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <div>
    <nav>
        <h3>Wiki App</h3>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>About</NavLink>
        <NavLink to='/'>Search</NavLink>
    </nav>
    <nav>
        <NavLink to='/details'>Details</NavLink>
        <NavLink to='/create-new-detail'>Create New Detail</NavLink>
        <NavLink to='/edit-detail'>Edit Detail</NavLink>
    </nav>
    </div>
    )
}

export default Header