import React from 'react';
import {connect} from 'react-redux';
//connect is a higher order component that lets us modify our component
//to have access to things related to redux
import {Link} from 'react-router-dom';
import { auth } from "../../firebase/firebase";
import CartIcon from '../cart-icon/cart-icon.component';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.scss';


const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop"> 
                SHOP
            </Link>
            <Link className="option" to="/shop"> 
                Contact
            </Link>
            {currentUser?
                (<div className="option" onClick={() => auth.signOut()}>
                    Sign Out
                </div>)
                :
                (<Link className="option" to="/signin">Sign In</Link>)
            }
            <CartIcon />
        </div>
    </div>
);
const mapToStateProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapToStateProps)(Header);