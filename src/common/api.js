
import axios from 'axios';

const root = 'http://localhost:3300';
const setHeaders = (token) => {
    return {
        headers: {
            authorization: token
        }
    }
}
export const postRegister = async (data, type) => {
    try {
        const res = await axios.post(`${root}/${type}`, data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
};


export const postLogin = async (data, type) => {
    try {
        const res = await axios.post(`${root}/${type}/login`, data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
};

export const getCarers = async (token) => {
    try {
        const res = await axios.get(`${root}/carer`, setHeaders(token))
        return res.data;
    } catch (error) {
        console.log(error)
    }
};

export const postOffer = async (data, token) => {
    try {
        const res = await axios.post(`${root}/offer`, data, setHeaders(token))
        return res.data;
    } catch (error) {
        console.log(error)
    }
};
export const listOffers = async (token) => {
    try {
        const res = await axios.get(`${root}/offer`, setHeaders(token))
        return res.data;
    } catch (error) {
        console.log(error)
    }
};
export const listOwnOffers = async (id, token) => {
    try {
        const res = await axios.get(`${root}/offer/user/${id}`, setHeaders(token))
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
export const apply = async (offerId, carerId, token) => {
    try {
        const res = await axios.put(`${root}/offer/${offerId}/carer/${carerId}`, null, setHeaders(token))
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
export const getOfferByCarer = async (carerId, token) => {
    try {
        const res = await axios.get(`${root}/offer/carer/${carerId}`, setHeaders(token))
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
export const getCarersInOffer = async (ids, token) => {
    try {
        const res = await axios.get(`${root}/carer/registered/?ids=${ids.join()}`, setHeaders(token))
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
export const getAllOffers = async (token) => {
    try {
        const res = await axios.get(`${root}/offer`, setHeaders(token))
        return res.data;
    } catch (error) {
        console.log(error)
    }
};