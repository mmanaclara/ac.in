import axios from "axios";

export const api = axios.create({
    baseURL: 'https://amazon-api.sellead.com',
    data: {
        name_ptbr: 'label',
        code: 'value'
    }
})