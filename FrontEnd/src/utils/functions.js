import Axios from 'axios'

export const axiosGet = async (url) =>
{
    const response = await Axios.get(url)
    return response.data
}