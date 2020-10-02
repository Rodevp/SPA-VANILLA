import get_data from '../../utils/getData';
import viewCharacter from '../../views/charater';
import get_hash from '../../utils/getHash';

async function Character () {
    const character = await get_data(`https://rickandmortyapi.com/api/character/${ get_hash() }`)
    
    return viewCharacter(character);
}

export default Character;