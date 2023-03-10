const Table = ({ table, query, filter }) => {
    const people = table.tblPeople;
    
    const filteredPeople = people.map(p => {
        let name = p.name;
        if (name === undefined) return
        if (query === undefined) return
        if (name.toLowerCase() === (query.toLowerCase())) return name;
    });

    const filteredTeam = people.map(p => {
        let team = p.teamNumber;
        if (team === undefined) return
        if (filter === undefined) return
        if (team.toLowerCase() === (filter.toLowerCase())) return team;
    });

    return (
        <div className="table">
            <h3>Table {table.tblNumber}</h3>
            <div className="chair-wrapper">
                {people.map((p, index) => (
                    <div className={`chair ${p.chair} ${filteredPeople.includes(p.name) ? 'found' : ''} ${filteredTeam.includes(p.teamNumber) ? 'found' : ''}`} key={index}>
                        <div className="chair-details">
                            <div className="about">
                                <img src={`${p.image}${p.name}`} alt={`${p.name} pfp`} />
                                <div className="name-wrapper">
                                    <h4>{p.name}</h4>
                                    <h6>{p.designation}</h6>
                                </div>
                            </div>
                            <div className="team">
                                <p>
                                    <small>Team</small>
                                </p>
                                <h5>{p.team}</h5>
                            </div>
                            <div className="project">
                                <p>
                                    <small>Current Project</small>
                                </p>
                                <h5>{p.currentProject}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;
