import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { getOppositeType, inputHandler } from '../../common/utils';
import { DinamicForm } from '../../components/DinamicForm/DinamicForm';
import './Login.css';
import { postLogin } from '../../common/api';
import { login } from '../../userSlice';
import { userTypes } from '../Register/registerForms';
import { delay } from '../../common/utils';
import { useDispatch } from 'react-redux';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [type, setType] = useState(userTypes.user.type);
    const [credentials, setCredentials] = useState(userTypes[type].loginCredentials)

    const sendLoginData = async () => {
        const logUser =  await postLogin(credentials, type);
        if (logUser) {
            dispatch(login({userPass: {[type]: logUser[type], token: logUser.token, type}}));
            delay(navigate, ["/"], 750);
        }
    }

    return (
        <div>
            <Header text="estás] en [login_"/>
            <div className='loginContainer'>
                <div className='loginDesign'>
                    <DinamicForm className='loginForm' 
                        action={()=> sendLoginData(credentials)}
                        handler={inputHandler}
                        cb={setCredentials}
                        elements={userTypes[type].loginInputs}/>
                    <div className='checkboxDesign'>SOY CUIDADOR
                    <input className='checkbox'type="checkbox" checked={type === 'carer'} onChange={() => setType(getOppositeType(userTypes, type).type)}/>
                    </div>
                </div>
                    <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/register") }, 200)}>¿Aún no estás registrado? Puedes hacerlo aquí</div>
                </div>
        </div>
    );
};

export default Login;


    
