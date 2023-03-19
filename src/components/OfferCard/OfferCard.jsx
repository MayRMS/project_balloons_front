
//Se deja como testigo del proceso de aprendizaje pero no se usa
import React from 'react';
import './OfferCard.css';


export const OfferCard = ({offer}) => {
    const of = offer;

    return (
        <div className='cardOfferDesign'>  
            <div className='nameDesign'> Title: {of.title}</div>
            <div className='featuresDesign'>
                <div> Specifications: {of.specifications}</div>
                <div> Localidad: {of.workArea}</div>
                <div> Disponibilidad: {of.availability}</div>
                <div> Usuario: {of.user}</div>
                <div> Tipo: {of.type}</div>
                <div> Tarifa Ofrecida: {of.feeOffered}</div>
            </div>
            <br/>
        </div>
    )
}
