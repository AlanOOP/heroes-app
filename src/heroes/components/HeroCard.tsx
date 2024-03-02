import { Link } from "react-router-dom";


interface HeroesRoutesProps {
    id: string;
    superhero: string;
    publisher: string;
    alter_ego: string;
    first_appearance: string;
    characters: string;
}

const CharactersByHero = ({ alter_ego, characters }: any) => {
    if (alter_ego !== characters) {
        return (
            <p>{characters}</p>
        )
    }
    return null;
}


export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}: HeroesRoutesProps) => {

    // const characterByHero = (<p>{characters}</p>);

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4 ">
                        <img src={`/assets/heroes/${id}.jpg`} alt={superhero} className="card-img" />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-tit">{superhero}</h5>
                            <p className="card-text">
                                {alter_ego}
                            </p>
                            <CharactersByHero
                                characters={characters}
                                alter_ego={alter_ego}
                            />
                            <p className="card-text">
                                <small className="text-muted">
                                    {first_appearance}
                                </small>
                            </p>

                            <Link
                                to={`/hero/${id}`}
                            >
                                Más Información
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
