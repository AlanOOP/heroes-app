import { useForm } from "../../hooks/useForm"
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroByName(q as string);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: q as string
  });


  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchText.trim().length <= 2) return;
    navigate(`?q=${searchText.toLowerCase()}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <form
            className="form"
            onSubmit={handleSearchSubmit}
          >
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">
              Buscar
            </button>

          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">
            Search a hero
          </div>
          <div className="alert alert-danger">
            There's no results <b> {q}</b>
          </div>

          {
            heroes && heroes.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }

        </div>
      </div>

    </>
  )
}
