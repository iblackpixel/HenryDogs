import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [breed, setBreed] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(breed);
      }}
    >
      <input
        type="text"
        placeholder="Raza..."
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <input type="submit" value="Buscar" />
    </form>
  );
}
