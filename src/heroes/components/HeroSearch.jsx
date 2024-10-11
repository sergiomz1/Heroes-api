import React from "react";

export const HeroSearch = ({ setSearchTerm, loading, hero, handleSearch }) => {
  const defaultImage = "https://via.placeholder.com/200"; // URL de la imagen por defecto

  const powerStatsTranslations = {
    intelligence: "Inteligencia",
    strength: "Fuerza",
    speed: "Velocidad",
    durability: "Durabilidad",
    power: "Poder",
    combat: "Combate",
  };

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div className="hero-search-container">
      <div className="row no-gutters mb-3">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control mb-2"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar superhéroe"
          />
        </div>
        <div className="col-md-4">
          <button onClick={handleSearch} className="btn btn-primary">
            Localiza tu Superhéroe
          </button>
        </div>
      </div>

      {hero ? (
        <div className="row">
          <div className="col-md-4">
            <img
              src={hero.image.url}
              className="card-img img-fluid mb-3"
              alt={hero.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{hero.name}</h5>
              <h2 className="card-text">
                Universo: {hero.biography["alignment"] === "good" ? "Marvel" : "DC"}
              </h2>
              <h2 className="card-text">Biografía:</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Nombre Completo: {hero.biography["full-name"]}
                </li>
                <li className="list-group-item">
                  Lugar de Nacimiento: {hero.biography["place-of-birth"]}
                </li>
                <li className="list-group-item">
                  Primera Aparición: {hero.biography["first-appearance"]}
                </li>
                <li className="list-group-item">
                  Ocupación: {hero.work.occupation}
                </li>
              </ul>
              <h2 className="card-text">Estadísticas:</h2>
              <div className="statistics">
                <ul className="list-group list-group-flush">
                  {Object.entries(hero.powerstats).map(([key, value]) => (
                    <li key={key} className="list-group-item">
                      {`${powerStatsTranslations[key]}: ${value}`}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-4">
            <img
              src={defaultImage}
              className="card-img img-fluid mb-3"
              alt="Imagen por defecto"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1>No se encontró al superhéroe.</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
