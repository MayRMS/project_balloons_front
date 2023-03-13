import React from 'react';

export const DinamicList = ({obj, name}) => {
    return (<div className={name}>{Object.keys(obj).map(e=> <div className={e}>{obj[e].label}:{obj[e].value}</div>)}</div>)
}