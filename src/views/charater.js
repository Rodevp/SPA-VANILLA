function view (character) {
  return `
  <div class="Characters__inner">
      <article class="Characters__card--image">
        <img src="${character.image}" alt="name">
      </article>
      <article class="Characters__card--information">
        <h3>Nombre: ${character.name}</h3>
        <h3>Episodios: ${character.episode.length}</h3>
        <h3>Estado: ${character.status} </h3>
        <h3>Especie: ${character.species}</h3>
        <h3>Genero: ${character.gender}</h3>
        <h3>Origen:${character.origin.name}</h3>
        <h3>Utlima locacion:${character.location.name}</h3>
    </article>
  </div>
  `
}

export default view;