
//Se deja como testigo del proceso de aprendizaje pero no se usa

import React from 'react';
import './ProfileCard.css';


export const ProfileCard = ({carer}) => {
    const c = carer;

    return (
        <div className='cardCarerDesign'>  
            <div className='nameDesign'> Nombre: {c.name}</div>
            <div className='featuresDesign'>
                <div> Tipo: {c.type}</div>
                <div> Tarifa: {c.fee}</div>
                <div> Localidad: {c.workArea}</div>
                <div> Disponibilidad: {c.availability}</div>
            </div>
            <br/>
        </div>
    )
}