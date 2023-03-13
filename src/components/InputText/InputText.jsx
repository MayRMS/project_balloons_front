import React from 'react';


export const InputText = ({type, name, className, placeholder, handler, cb}) => {

    return (
        <input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            onChange={(e)=> handler(e, cb)} 
            className={className} 
        />
    )
}