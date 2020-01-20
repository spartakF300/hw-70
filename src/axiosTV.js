import axios from 'axios';
export  const axiosTV= axios.create({
    baseURL: "http://api.tvmaze.com/"
});