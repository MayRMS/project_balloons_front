
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { UserHome } from '../../components/UserHome/UserHome';
import { userData } from '../../userSlice';
import './Home.css';


const Home = () => {
    const navigate = useNavigate();
    const userLoged = useSelector(userData);

    useEffect(() => {
        console.log(userLoged)
        !userLoged.userPass.token && setTimeout(() => { navigate("/login") }, 200)
    })
return (
    <div >
        <Header text="ESTAMOS EN HOME"/>
        <div className='homeDesign'>
            <div className='listDesign'>{userLoged.userPass.type == 'user' ? <UserHome></UserHome> : <UserHome></UserHome>} </div>
        </div>
    </div>
);
};

export default Home;
