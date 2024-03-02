import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

// interface HeroesRoutesProps {
//     id: string;
//     superhero: string;
//     publisher: string;
//     alter_ego: string;
//     first_appearance: string;
//     characters: string;
// }

export const HeroList = ({ publisher }: { publisher: string }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))

            }
        </div>
    )
}
