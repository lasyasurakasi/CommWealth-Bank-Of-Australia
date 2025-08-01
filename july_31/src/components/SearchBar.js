import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  flex: 1 1 300px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Button = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #1e40af;
  }
`;

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("title");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    onSearch(type, query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder={`Search by ${type}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="title">Title</option>
        <option value="genre">Genre</option>
      </Select>
      <Button type="submit">Search</Button>
    </Form>
  );
}

export default SearchBar;
