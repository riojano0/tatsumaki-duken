import axios from 'axios'

const tatsumakiDukenApiAxios = axios.create({
    baseURL: 'https://tatsumaki-function.netlify.app'
})

const TatsumakiDukenApi = {
    async getVideos() {
        const response = await tatsumakiDukenApiAxios.get('/.netlify/functions/api')
        return response.data;
    }
}


export default TatsumakiDukenApi;