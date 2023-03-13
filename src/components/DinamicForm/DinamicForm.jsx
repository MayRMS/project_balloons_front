import React from 'react';
import { ActionButton } from '../ActionButton/ActionButton';
import { InputText } from '../InputText/InputText';
import './DinamicForm.css'

export const DinamicForm = ({elements, action, handler, cb}) => {
    return (
        <>
        {elements.map((e, i) => <InputText 
            key={i}
            type={e.name} 
            name={e.name} 
            className={e.name} 
            placeholder={e.placeholder} 
            handler={handler} 
            cb={cb}
        />)}
        <ActionButton action={action} placeholder={'enviar*'}/>
        </>
    )
}