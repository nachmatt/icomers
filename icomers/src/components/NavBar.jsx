import logo from '../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/NavBar.scss';

const NavBar = () => {
    // hamburger menu
    return (
        <div className='nav_container'>
            <img src={logo} alt='logo'></img>
            <ul className='nav_list_container'>
                <li>We</li>
                <li>Products</li>
                <li>Orders</li>
                <ShoppingCartIcon sx={{ color:'#525252' }} fontSize="large" className='nav_cart'/>
            </ul>
        </div>
    )
}

export default NavBar