
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
        const res = await axios.get(`${root}/offer/${id}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}