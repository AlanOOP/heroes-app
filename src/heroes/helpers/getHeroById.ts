import { heroes } from "../data/data"

export const getHeroById = (id: string) => {
    return heroes.find(hero => hero.id === id);
}
