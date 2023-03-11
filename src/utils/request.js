import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:3001/api/'
})

export const get = async (path, options = {}) => {
    const respone = await request.get(path, options)
    return respone.data;
}

export default request;