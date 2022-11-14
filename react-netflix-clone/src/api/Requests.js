const API_KEY = 'a46e4ddb694134a2532d1396a58c22cc'

const Requests = {
    trending: `trending/all/day?api_key=${API_KEY}`,
    popularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    nowPlaying:  `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
     topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
     upcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
 };
 
 export default Requests;

 