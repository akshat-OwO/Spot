import { useState } from "react";

const Search = ({ query, setQuery, setFilter }) => {
    const [showFilters, setShowFilters] = useState(false);
    const [filterHead, setFilterHead] = useState(false);

    const handleFilter = () => {
        setShowFilters(!showFilters);
    }

    const handleCheck = (e) => {
        setFilterHead(!filterHead);
    }

    const handleSelect = (e) => {
        if (e.target.checked) {
            setFilter(e.target.value);
        } else {
            setFilter('');
        }
    }

    return (
        <div className="search">
            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button
                className="filter-btn"
                onClick={handleFilter}
            ><img src="/filter-solid.svg" width={20} alt="filter-btn" /></button>
            {
                showFilters && (
                    <div className="filters">
                    <div className="filter-head">
                        <input type="checkbox" name="Team" id="Team" value='Team' onChange={(e) => handleCheck(e)} />
                        <label htmlFor="Team">Team</label>
                    </div>
                    {
                        filterHead && (
                            <div className="filter-body">
                                <div className="filter">
                                    <input type="radio" name="Teams" id="No Team" value='' onChange={(e) => handleSelect(e)} />
                                    <label htmlFor="No Team">No Team</label>
                                </div>
                                <div className="filter">
                                    <input type="radio" name="Teams" id="Team 1" value='Team 1' onChange={(e) => handleSelect(e)} />
                                    <label htmlFor="Team 1">Team 1</label>
                                </div>
                                <div className="filter">
                                    <input type="radio" name="Teams" id="Team 2" value='Team 2' onChange={(e) => handleSelect(e)} />
                                    <label htmlFor="Team 2">Team 2</label>
                                </div>
                                <div className="filter">
                                    <input type="radio" name="Teams" id="Team 3" value='Team 3' onChange={(e) => handleSelect(e)} />
                                    <label htmlFor="Team 3">Team 3</label>
                                </div>
                                <div className="filter">
                                    <input type="radio" name="Teams" id="Team 4" value='Team 4' onChange={(e) => handleSelect(e)} />
                                    <label htmlFor="Team 4">Team 4</label>
                                </div>
                                <div className="filter">
                                    <input type="radio" name="Teams" id="Team 5" value='Team 5' onChange={(e) => handleSelect(e)} />
                                    <label htmlFor="Team 5">Team 5</label>
                                </div>
                                <div className="filter">
                                    <input type="radio" name="Teams" id="Team 6" value='Team 6' onChange={(e) => handleSelect(e)} />
                                    <label htmlFor="Team 6">Team 6</label>
                                </div>
                                <div className="filter">
                                    <input type="radio" name="Teams" id="Team 7" value='Team 7' onChange={(e) => handleSelect(e)} />
                                    <label htmlFor="Team 7">Team 7</label>
                                </div>
                                <div className="filter">
                                    <input type="radio" name="Teams" id="Team 8" value='Team 8' onChange={(e) => handleSelect(e)} />
                                    <label htmlFor="Team 8">Team 8</label>
                                </div>
                                <div className="filter">
                                    <input type="radio" name="Teams" id="Team 9" value='Team 9' onChange={(e) => handleSelect(e)} />
                                    <label htmlFor="Team 9">Team 9</label>
                                </div>
                            </div>
                        )
                    }
                    </div>
                )
            }
        </div>
    );
};

export default Search;
