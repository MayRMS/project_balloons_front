
import axios from 'axios';

const root = 'http://localhost:3300';

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

export const getCarers = async () => {
    try {
        const res = await axios.get(`${root}/carer`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
};

export const postOffer = async (data) => {
    try {
        const res = await axios.post(`${root}/offer`, data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
};
export const listOffers = async () => {
    try {
        const res = await axios.get(`${root}/offer`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
};
export const listOwnOffers = async (id) => {
    try {
        const res = await axios.get(`${root}/offer/user/${id}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
export const apply = async (offerId, carerId) => {
    try {
        const res = await axios.put(`${root}/offer/${offerId}/carer/${carerId}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
export const getOfferByCarer = async (carerId) => {
    try {
        const res = await axios.get(`${root}/offer/carer/${carerId}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
export const getCarersInOffer = async (ids) => {
    try {
        const res = await axios.get(`${root}/carer/registered/?ids=${ids.join()}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
export const getAllOffers = async () => {
    try {
        const res = await axios.get(`${root}/offer`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
};