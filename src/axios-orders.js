import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1fa43.firebaseio.com/'
});

export default instance;