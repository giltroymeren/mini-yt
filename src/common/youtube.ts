import axios from 'axios'

const API_YOUTUBE = 'AIzaSyDIc3zWNca_Mk1w-YOmWLsOvFLrSOCZpc8'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: API_YOUTUBE
  }
})