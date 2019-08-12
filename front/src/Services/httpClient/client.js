import axios from 'axios'

const client = axios.create({
  baseURL: 'https://mariage-nono-euridyce.prismic.io/api/v2/documents/search',
})

export default client;