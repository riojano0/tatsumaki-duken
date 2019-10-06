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
                link: `https://www.youtube.com/watch?v=${data.id.videoId}`,
                title: data.snippet.title,
                date: data.snippet.publishedAt,
                duration: '2:58',
                description: data.snippet.description,
                thumb: data.snippet.thumbnails.default.url
            };
        });
    }
}


export default TatsumakiDukenApi;