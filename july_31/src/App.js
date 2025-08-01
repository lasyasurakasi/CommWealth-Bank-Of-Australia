import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MovieList from "./components/MovieList";
import all from "./apis/all";
import SearchBar from "./components/SearchBar";
import MovieForm from "./components/MovieForm";
import UseCasesDemo from "./useCasesDemo";

// Styled components
const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

function MainApp() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    all.getAllMovies()
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.error("Error fetching movies", err);
      });
  };

  const handleSearch = (type, query) => {
    const method = type === "title" ? all.findByTitle : all.findByGenre;
    method(query)
      .then((res) => setMovies(res.data))
      .catch((err) => console.error("Search error", err));
  };

  const addMovie = (newMovie) => {
    all.addMovie(newMovie)
      .then(() => fetchMovies())
      .catch((err) => console.error("Add error:", err));
  };

  const updateMovie = (updatedMovie) => {
    all.updateMovie(updatedMovie.id, updatedMovie)
      .then(() => {
        fetchMovies();
        setSelectedMovie(null);
      })
      .catch((err) => console.error("Update error:", err));
  };

  const clearSelection = () => setSelectedMovie(null);

  const handleDelete = async (id) => {
    await all.deleteMovie(id);
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <AppWrapper>
      <Title>🎬 Movie Watchlist</Title>

      <MovieForm
        onAdd={addMovie}
        onUpdate={updateMovie}
        selectedMovie={selectedMovie}
        clearSelection={clearSelection}
      />

      <SearchBar onSearch={handleSearch} />

      <MovieList
        movies={movies}
        onSelect={setSelectedMovie}
        onDelete={handleDelete}
      />
    </AppWrapper>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/useCases" element={<UseCasesDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
