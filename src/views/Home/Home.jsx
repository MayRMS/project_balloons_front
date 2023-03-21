
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { UserHome } from '../../components/UserHome/UserHome';
import { CarerHome } from '../../components/CarerHome/CarerHome';
import { userData } from '../../userSlice';
import './Home.css';


const Home = () => {
    const navigate = useNavigate();
    const userLoged = useSelector(userData);

    const token = userLoged.userPass.token
    console.log(token)
    useEffect(() => {
        !token && setTimeout(() => { navigate("/login") }, 200)
    })
return (
    <div >
        <Header text="ESTAMOS EN HOME"/>
        <div className='homeDesign'>
            <div className='listDesign'>{token && userLoged.userPass.type == 'user' ? <UserHome/> : <CarerHome/>} </div>
        </div>
    </div>
);
};

export default Home;
