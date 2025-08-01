import server from '../server';

class AllApi {
    getAllMovies() {
        return server.get('/movies');
    }
    getById(id) {
        return server.get(`/movies/${id}`);
    }
    addMovie(data) {
        return server.post('/movies', data);
    }
    updateMovie(id, data) {
        return server.put(`/movies/${id}`, data);
    }
    deleteMovie(id) {
        return server.delete(`/movies/${id}`);
    }
    findByTitle(title) {
        return server.get(`/movies?title=${title}`);
    }
    findByGenre(genre) {
        return server.get(`/movies?genre=${genre}`);
    }
    findWatched() {
        return server.get('/movies?watched=true');
    }
    findUnwatched() {
        return server.get('/movies?watched=false');
    }
}
export default new AllApi();