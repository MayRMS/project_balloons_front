import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { inputHandler, delay, getOppositeType } from '../../common/utils';
import { DinamicForm } from '../../components/DinamicForm/DinamicForm';
import './Register.css';
import { userTypes } from './registerForms';
import { postRegister } from '../../common/api';
import { login } from '../../userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [type, setType] = useState(userTypes.user.type);
    const [credentials, setCredentials] = useState(userTypes[type].credentials);
    const makeRegister = async () => {
        const newUser =  await postRegister(credentials, type);
        dispatch(login({[type]: newUser[type], token: newUser.token, type}));
        delay(navigate, ["/"], 750);
    }
    return (
        <div>
            <Header text="ESTAMOS EN REGISTER"/>
           <div>
           <div className='registerDesign'>
            <DinamicForm 
                action={() => makeRegister()}
                handler={inputHandler}
                cb={setCredentials}
                elements={userTypes[type].formInputs}/>
            </div>
            <div className='linkDesign' onClick={() => setType(getOppositeType(userTypes, type).type)}>ERES UN {getOppositeType(userTypes, type).translation}? REGISTRATE AQUÍ </div>
            </div>
        </div>
    );
};

export default Register;