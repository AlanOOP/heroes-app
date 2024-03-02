import { heroes } from '../data/data';

export const getHeroByName = (name: string) => {
    name = name.toLocaleLowerCase().trim();

    if (name === '') {
        return [];
    }
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}

