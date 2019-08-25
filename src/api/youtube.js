import axios from 'axios'

const KEY = 'AIzaSyDU6S94YtSBHNRGBRdDZkxVjDG7werGPug';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});


