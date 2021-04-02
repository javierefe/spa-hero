import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router'

import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search)
    
    const [{searchText}, handleInputChange]= useForm({
        searchText:q
    });
    
    // const heroesFiltered = getHeroesByName(searchText);

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
    

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
        
    }


    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                </div>

                <form onSubmit={handleSearch}>
                    <input 
                        type="text"
                        name="searchText"
                        value={searchText}
                        placeholder="Find your hero"
                        autoComplete="off"
                        className="form-control"
                        onChange={handleInputChange}
                    />

                    <button
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary"
                        
                    >
                        Search
                    </button>
                </form>
                
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                        heroesFiltered.map(hero =>(
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
