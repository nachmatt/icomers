import borb from '../assets/borb 1.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/NavBar.scss';

const NavBar = () => {
    // hamburger menu
    return (
        <div className='nav__container'>
            <img src={borb} alt='logo' />
            <ul className='nav__list_container'>
                <li>We</li>
                <li>Products</li>
                <li>Orders</li>
                <ShoppingCartIcon sx={{ color:'#525252' }} fontSize="large" className='nav_cart'/>
            </ul>
        </div>
    )
}

export default NavBar