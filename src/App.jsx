import { useState } from "react";
import Logo from "./components/Logo";
import Search from "./components/Search";
import TablesLayout from "./components/TablesLayout";

// data import
import { data } from "../data/db";

function App() {
  const [tables, setTables] = useState(data);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState('');

  return (
    <div className="App">
      <Logo />
      <Search query={query} setQuery={setQuery} setFilter={setFilter} />
      <TablesLayout tables={tables} query={query} filter={filter} />
    </div>
  )
}

export default App
