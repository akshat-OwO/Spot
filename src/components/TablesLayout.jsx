import Table from "./Table";

const TablesLayout = ({ tables, query, filter }) => {
    const data = tables;

    return (
        <div className="tbl-wrapper">
            <div className="tbl-layout">
                {
                    data.map((table) => (
                        <Table key={table.tblNumber} table={table} query={query} filter={filter} />
                    ))
                }
            </div>
        </div>
    );
}
 
export default TablesLayout;