import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import './UserHome.css'
import { userData } from '../../userSlice';
import { DinamicForm } from '../../components/DinamicForm/DinamicForm';
import { DinamicList } from '../../components/DinamicList/DinamicList';
import { getCarers, postOffer, listOwnOffers, getCarersInOffer } from '../../common/api';
import { delay, inputHandler, makeObjForDinamicList } from '../../common/utils';
import { possibleStates, offerInputs, formValues, labels } from './userForms.js';
import { ActionButton } from '../ActionButton/ActionButton';


export const UserHome = () => {
    const navigate = useNavigate();
    const [carers, setCarers] = useState([]);
    const [offers, setOffers] = useState([]);
    const [state, setState] = useState('carerList');
    const [offerFormValue, setOfferFormValue] = useState(formValues);

    const userLoged = useSelector(userData);
    const userId = userLoged?.userPass?.user?.id

    const createOffer = async () => {
        await postOffer({...offerFormValue, user: userId});
        setState('carerList')   
    }
    const getCarersData = async () => {
        const res = await getCarers()
        setCarers(res.carers)  
    }
    const getRegisteredCarers = async (carerIds) => {
        const res = await getCarersInOffer(carerIds)
        setCarers(res.carers)
        console.log({carers})  
    }
    const getUserOffers = async () => {
        const res = await listOwnOffers(userId)
        setOffers(res.offers.map(e => ({...e, list: false})))
    }

    useEffect( () =>{
        if(!userId) delay(navigate, ['login'], 200);
        getCarersData()
        getUserOffers()
    },[state])

return (
    <div className='userHomeContainer' >
        {state == 'carerList' && <div className='userHomeDesign' >{carers.map((e, i) => <DinamicList
            key={i} 
            obj={makeObjForDinamicList(e, labels)} 
            name='list'/>)}</div>}
        
            {state == 'offerList' && <div className='userHomeDesign' >{offers.map((e, i) => <div key={i}
                className={e.registeredCarers?.length ? 'matched' : 'list'}>
                <DinamicList 
                    obj={makeObjForDinamicList(e, labels)}
                    name={'offer'}/>
                {e.registeredCarers.length ? <>
                    <button className='regCarersDesign' onClick={() => {
                        e.list = !e.list
                        getRegisteredCarers(e.registeredCarers)
                        console.log(carers)
                    }}>Perfiles Inscritos</button>
                    {e.list && carers.map((j, idx) => <DinamicList
                        key={idx} 
                        obj={makeObjForDinamicList(j, labels)} 
                        name='profile'/>)}
                    </>: <></>}
        </div>)}</div>}
    
        
        {state == 'offerForm' && <div className='createOfferDesign'> <DinamicForm 
                action={createOffer}
                handler={inputHandler}
                cb={setOfferFormValue}
                elements={offerInputs}/>
            
        </div>}

        <div className='homeButtonsDesign'>
                {Object.keys(possibleStates)
                    .filter(e => e != state)
                    .map((e, i) => 
                        <div key={i} className='offersButtonDesign'>
                            <ActionButton action={()=> setState(e)} placeholder={possibleStates[e]}/>
                        </div>)}
        </div>
    </div>
);
};
