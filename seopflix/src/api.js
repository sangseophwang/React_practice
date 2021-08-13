import axios from 'axios';

const api = axios.create({
  baseURL : "https://api.themoviedb.org/3/",
  params : {
    api_key: "5f371d5e8a786b66793334e826cbf582",
    language:'en-US'
  }
})