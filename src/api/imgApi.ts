import axios from 'axios';

export const imgInstance = axios.create({ baseURL: 'https://reqres.in/' });

