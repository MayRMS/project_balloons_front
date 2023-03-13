
const userImputs = [{ 
    name: 'name',
    placeholder: 'Nombre',
},{ 
    name: 'email',
    placeholder: 'Email',
},
{
    name: 'password',
    placeholder: 'Contraseña',
},
{
    name: 'workArea',
    placeholder: 'Localidad',
}];

const carerImputs = [
 ...userImputs,
{
    name: 'fee',
    placeholder: 'tarifa',
},
{
    name: 'type',
    placeholder: 'Tipo de cuidador'
},
{
    name: 'availability',
    placeholder: 'disponibilidad horaria'
},
];
const loginCredentials = {
    email: '',
    password: ''
};
const loginInputs = [{ 
    name: 'email',
    placeholder: 'Email',
},
{
    name: 'password',
    placeholder: 'Contraseña',
}];
const userCredentials = {
    name: '',
    email: '',
    password: '',
    workArea: '',
    
};
const carerCredentials = {
    ...userCredentials,
    fee: '',
    type: '',
    workArea: '',
    availability: '',
    recordChecked: '',
    
};
export const userTypes =  {
    user: {
        type: 'user',
        translation: 'usuario',
        formInputs: userImputs,
        credentials: userCredentials,
        loginCredentials,
        loginInputs
    },
    carer: {
        type: 'carer',
        translation: 'profesional',
        formInputs: carerImputs,
        credentials: carerCredentials,
        loginCredentials,
        loginInputs
    }
}