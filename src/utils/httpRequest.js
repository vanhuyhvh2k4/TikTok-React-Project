import axios from "axios";

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

export const get = async (path, options = {}) => {
    const respone = await request.get(path, options)
    return respone.data;
}

export default request;