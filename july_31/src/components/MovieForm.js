import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  margin-bottom: 1.5rem;
  background: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonRow = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: white;
  background-color: ${(props) => props.bg || "#007bff"};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hover || "#0056b3"};
  }
`;

function MovieForm({ onAdd, onUpdate, selectedMovie, clearSelection }) {
  const [formData, setFormData] = useState({
    title: "",
    cast: "",
    genre: "",
    watched: false, // boolean default
  });

  useEffect(() => {
    if (selectedMovie) {
      setFormData(selectedMovie);
    } else {
      setFormData({ title: "", cast: "", genre: "", watched: false });
    }
  }, [selectedMovie]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "watched"
          ? value === "true" // convert string to boolean
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedMovie) {
      onUpdate(formData);
    } else {
      onAdd(formData);
    }

    setFormData({ title: "", cast: "", genre: "", watched: false });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Title>{selectedMovie ? "✏️ Edit Movie" : "➕ Add Movie"}</Title>

      <InputGrid>
        <Input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Movie Name"
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="cast"
          value={formData.cast}
          placeholder="Cast"
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="genre"
          value={formData.genre}
          placeholder="Genre"
          onChange={handleChange}
          required
        />
        <Select
          name="watched"
          value={formData.watched.toString()}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="true">Watched</option>
          <option value="false">Unwatched</option>
        </Select>
      </InputGrid>

      <ButtonRow>
        <Button type="submit" bg="#007bff" hover="#0056b3">
          {selectedMovie ? "Update Movie" : "Add Movie"}
        </Button>
        {selectedMovie && (
          <Button
            type="button"
            bg="#6c757d"
            hover="#5a6268"
            onClick={clearSelection}
          >
            Cancel
          </Button>
        )}
      </ButtonRow>
    </FormWrapper>
  );
}

export default MovieForm;
