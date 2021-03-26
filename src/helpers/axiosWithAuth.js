import axios from "axios";

import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: token,
        },
    });
};

//Task List:
//Build and export a function used to send in our authorization token