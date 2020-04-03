import axios from 'axios';

const TMDB_KEY = '24ca04c6a3c3f77dcd86b12fdef8c829';
const makeRequest = (path, params) => 
    axios.get(`https://api.themoviedb.org/3/${path}`, {
        params : {
            ...params,
            api_key : TMDB_KEY
        }
    });
