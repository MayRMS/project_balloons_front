import React from 'react';

export const ActionButton = ({placeholder, action, name}) => <button className={name} onClick={action}>{placeholder}</button>