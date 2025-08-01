import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const Info = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.25rem;
`;

const Status = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

const EditButton = styled.button`
  font-size: 0.875rem;
  color: #2563eb;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const DeleteButton = styled.button`
  font-size: 0.875rem;
  color: #ef4444;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #6b7280;
`;

function MovieList({ movies, onSelect, onDelete }) {
  if (movies.length === 0) {
    return <EmptyMessage>No movies found.</EmptyMessage>;
  }

  return (
    <Grid>
      {movies.map((movie) => (
        <Card key={movie.id}>
          <Title>{movie.title}</Title>
          <Info>
            <strong>Genre:</strong> {movie.genre}
          </Info>
          <Info>
            <strong>Cast:</strong> {movie.cast}
          </Info>
          <Status>
            <strong>Status:</strong> {movie.watched ? "Watched" : "Unwatched"}
          </Status>
          <ButtonGroup>
            <EditButton onClick={() => onSelect(movie)}>✏️ Edit</EditButton>
            <DeleteButton onClick={() => onDelete(movie.id)}>🗑️ Delete</DeleteButton>
          </ButtonGroup>
        </Card>
      ))}
    </Grid>
  );
}

export default MovieList;
