import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/details'>Details</NavLink>
        <NavLink to='/create-new-detail'>Create New Detail</NavLink>
        <NavLink to='/edit-detail'>Edit Detail</NavLink>
    </nav>
    )
}

export default Header