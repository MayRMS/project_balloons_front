
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData, logout } from '../../userSlice';
import Logo from './logo.png';
import './Header.css';


export const Header = (p) => {
    const dispatch = useDispatch();
    const userLoged = useSelector(userData);
return (
    <div className='headerDesign'>
        <div className='logoDesignHeader'><img className='ballonLogo' src={Logo} alt="ballon"/></div>
        <div className='searchBarDesign'>{p.text}</div>
        <div className='logoutDesign'>{userLoged.userPass.token && <button onClick={()=> dispatch(logout())}>LOGOUT</button>}</div>
    </div>
);
};

