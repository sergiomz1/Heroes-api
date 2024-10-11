import React, { useState, useEffect } from "react";
import { HeroSearch } from "../components/HeroSearch";

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("hulk"); 
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = "ca7ede1b5f026ad02a2b39d77313e0d4"; //clave del api

  const fetchHero = async (term) => {
    const url = `https://superheroapi.com/api.php/${apiKey}/search/${term}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al obtener datos del superhéroe");
      }
      const data = await response.json();
      setHero(data.results ? data.results[0] : null);
    } catch (error) {
      console.error("Error :", error);
      setHero(null); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchHero(searchTerm);
    }
  }, [searchTerm]);

  return (
    <div className="col">
      <HeroSearch setSearchTerm={setSearchTerm} loading={loading} hero={hero} />
    </div>
  );
};
