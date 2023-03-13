import React, { useEffect, useState } from 'react';
import './UserHome.css'
import { useDispatch, useSelector } from 'react-redux';
import { inputHandler, delay, getOppositeType } from '../../common/utils';
import { userData } from '../../userSlice';

import { DinamicForm } from '../../components/DinamicForm/DinamicForm';
import { DinamicList } from '../../components/DinamicList/DinamicList';
import { ProfileCard } from '../ProfileCard/ProfileCard';
import { possibleStates, offerInputs, formValues } from './userForms.js'

import { getCarers, postOffer, listOffers, listOwnOffers } from '../../common/api';
export const UserHome = () => {
    const [state, setState] = useState('carerList');
    const [offerFormValue, setOfferFormValue] = useState(formValues);
    const [carers, setCarers] = useState([]);
    const [offers, setOffers] = useState([]);

    const dispatch = useDispatch();
    const userLoged = useSelector(userData);
    
    const createOffer = async () => {
        console.log({...offerFormValue, id: userLoged.userPass.user.id})
        const newOffer =  await postOffer({...offerFormValue, user: userLoged.userPass.user.id});
        setState('carerList')   
    }
    const getCarersData = async () => {
        const res = await getCarers()
        setCarers(res.carers)  
    }
    const getAllOffers = async () => {
        const res = await listOffers()
        setOffers(res.offers)
    }
    const getUserOffers = async () => {
        const res = await listOwnOffers(userLoged.userPass.user.id)
        setOffers(res.offers)
    }

    

    const labels = { 
        availability: 'disponibilidad', 
        feeOffered: 'Pasta ofrecida',
        specifications: 'especificaciones', 
        title: 'titulo',
        type: 'tipo',
        workArea: 'area',
        fee: 'tarifa'
    }
    const makeObjForDinamicList = (obj) => {
        const o = {}
        for (const key of Object.keys(obj || [])) {
            if(labels[key]) o[key] = {label: labels[key], value: obj[key]}
        }
        return o
    }
    useEffect( () =>{
        getCarersData()
        getUserOffers()
        
    },[])
return (
    <div >
        <div className='userHomeDesign' >USER HOME</div>
        {state == 'carerList' && carers.map((e, i)=> <ProfileCard key={i} carer={e}/>)}
        {state == 'offerList' && offers.map((e, i) => <DinamicList key={i} obj={makeObjForDinamicList(e)} name='list'/>)}
        {state == 'offerForm' && <div> <DinamicForm 
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
                            <button onClick={()=> setState(e)}>{possibleStates[e]}</button>
                        </div>)}
        </div>
    </div>
);
};
