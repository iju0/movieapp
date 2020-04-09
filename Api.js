import axios from 'axios';

const TMDB_KEY = '24ca04c6a3c3f77dcd86b12fdef8c829';
const makeRequest = (path, params) => 
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params : {
            ...params,
            api_key : TMDB_KEY
        }
    });


const getAnything = async(path, params = {}) => {
    try {

        const {
            data : {results},
            data
        } = await makeRequest(path, params)

        return [results || data, null]

    } catch (e) {
        console.log(e)
        return [null, e]
    }
}

export const movieAPI = {
    nowPlaying : () => getAnything('/movie/now_playing'),
    popular : () => getAnything('/movie/popular'),
    upcoming : () => getAnything('/movie/upcoming', {region : 'kr'}),
    search : query => getAnything('/search/movie', {query}),
    movie : id => getAnything(`/movie/${id}`)
};

export const tvAPI = {
    today : () => getAnything('/tv/airing_today'),
    thisWeek : () => getAnything('/tv/on_the_air'),
    topRated : () => getAnything('/tv/top_rated'),
    popular : () => getAnything('/tv/popular'),
    search : query => getAnything('/search/tv', {query}),
    show : id => getAnything(`/tv/${id}`)
}

export const apiImage = path => `https//image.tmdb.org/t/p/w500${path}`;