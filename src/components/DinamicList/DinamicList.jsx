import React from 'react';

export const DinamicList = ({obj, name}) => {
    obj.email && console.log(obj)
    return (<div className={name}>{Object.keys(obj)
        .map((e, i)=> <div key={i} className={e}><b>{obj[e].label.toUpperCase()} :</b> {obj[e].value}</div>)
    }</div>)
}