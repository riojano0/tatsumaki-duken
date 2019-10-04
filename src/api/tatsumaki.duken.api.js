// import axios from 'axios'
import ResponseExample from './response.example'

// const tatsumakiDukenApiAxios = axios.create({
    // TODO implement the API
// })

const TatsumakiDukenApi = {
    getVideos() {
        return ResponseExample.items.map(data => {
            return {
                id: data.id.videoId,
                title: data.snippet.title,
                thumb: data.snippet.thumbnails.default.url
            };
        });
    }
}


export default TatsumakiDukenApi;