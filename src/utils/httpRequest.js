import axios from "axios";

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const get = async (path, options = {}) => {
    const respone = await request.get(path, options)
    return respone.data;
}

export const post = async (path, options = {}, config = {}) => {
    const respone = await request.post(path, options, config)
    return respone;
}

export const patch = async (path, options = {}, config = {}) => {
    const respone = await request.patch(path, options, config)
    return respone;
}

export default request;