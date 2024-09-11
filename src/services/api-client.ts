import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '7d72654fca1449d1958ec3031b69f228'
    }
})