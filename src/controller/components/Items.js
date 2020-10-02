import get_data from '../../utils/getData';

async function Items () {
    let characters = await get_data("https://rickandmortyapi.com/api/character");
    const view = `
        <section class="wrapper">
            ${characters.results.map(character =>  `
                <div class="card">
                    <section>
                        <figure>
                            <img src="${character.image}" alt="image character">
                        </figure>   
                    </section>
                    <section class="card_information">
                        <p>
                            Name: ${character.name}
                        </p>
                        <p>
                            Status: ${character.status}
                        </p>
                        <p>
                            Specie: ${character.species}
                        </p>
                        <a href="#/${character.id}">Ver información</a>
                    </section>
                </div>
            `)}
        </section>        
    `;
    return view;
}

export default Items;