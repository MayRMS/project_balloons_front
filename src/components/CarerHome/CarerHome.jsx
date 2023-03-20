import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import './CarerHome.css';
import { userData } from '../../userSlice';
import { labels } from '../UserHome/userForms';
import { ActionButton } from '../ActionButton/ActionButton';
import { delay, makeObjForDinamicList } from '../../common/utils';
import { DinamicList } from '../../components/DinamicList/DinamicList';
import { getAllOffers, apply, getOfferByCarer } from '../../common/api';

const possibleStates = {
    offerList: 'Ver ofertas',
    registeredOffersList: 'Mis ofertas',
}

export const CarerHome = () => {
    const navigate = useNavigate();
    const [offers, setOffers] = useState([]);
    const [state, setState] = useState('offerList');

    const userLoged = useSelector(userData);
    const userId = userLoged?.userPass?.carer?.id
    const token = userLoged?.userPass?.token
    const getOppositeType = () => Object.keys(possibleStates).find(e => e != state);

    const getOffers = async () => {
        const res = await getAllOffers(token)
        setOffers(res.offers)
    };
    const applyOffer = async (offerId) => {
        await apply(offerId, userLoged.userPass.carer.id, token)
        setOffers(offers.map(e => e.id === offerId 
            ? {...e, registeredCarers: [...e.registeredCarers, userId]} 
            : e
        ))
    };
    const listCarerOffers = async () => {
        const res = await getOfferByCarer(userId, token)
        setOffers(res)
    };
    
    useEffect( () => {
        if(!userId) delay(navigate, ['login'], 200);
        state == 'offerList' ? getOffers() : listCarerOffers();
    },[state]);

return (
    
    <div className='carerHomeDesign'>
    <div className='myOffersDesign'>
    <ActionButton action={()=> setState(getOppositeType())} placeholder={possibleStates[getOppositeType()]}/>
    </div>
        {offers.map((e, i) => <div key={i}>
            <DinamicList  obj={makeObjForDinamicList(e, labels)} name='list blocklist'/>
            {state === 'offerList' && !e.registeredCarers?.includes(userId) && <button onClick={()=> applyOffer(e.id)}>inscribirme!</button>}                                        
        </div>)}
    </div>
);
};
