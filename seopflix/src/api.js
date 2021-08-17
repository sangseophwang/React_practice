import axios from 'axios';

const api = axios.create({
  baseURL : "https://api.themoviedb.org/3/",
  params : {
    api_key: "5f371d5e8a786b66793334e826cbf582",
    language:'en-US'
  }
})

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming:   () => api.get("movie/upcoming"),
  popular:    () => api.get("movie/popular"),
  movieDetail: id => api.get(`movie/${id}`)
}

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id => api.get(`tv/${id}`)
}

export default api;