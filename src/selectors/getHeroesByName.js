import {heroes} from '../data/heroes';

export const getHeroesByName = (name = '') => {

    if(name === ''){
        return [];
    }

    name = name.toLocaleLowerCase();
    // para qe sea insensible a las busquedas
    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    );
}