import { searchMovieByTitle, getMovieDetailsById, searchMoviesByTerm } from './modules/wrapper.js';

searchMovieByTitle('Inception', data => {
    console.log(data); 
});

getMovieDetailsById('tt1375666', data => {
    console.log(data);
});

searchMoviesByTerm('Batman', data => {
    console.log(data);
});
