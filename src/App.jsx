import { useState } from "react";
import Logo from "./components/Logo";
import Search from "./components/Search";
import TablesLayout from "./components/TablesLayout";

// data import
import { data } from "../data/db";
import { useEffect } from "react";

function App() {
  const [tables, setTables] = useState(data);
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   if (query !== '') {
  //     document.querySelectorAll('chair').forEach(ch => {
  //       ch.classList.remove('occupied');
  //     });
  //   }
  //   if (query === '') {
  //     document.querySelectorAll('chair').forEach(ch => {
  //       ch.classList.remove('found');
  //     });
  //   }
  // }, [query]);

  return (
    <div className="App">
      <Logo />
      <Search query={query} setQuery={setQuery} />
      <TablesLayout tables={tables} query={query} />
    </div>
  )
}

export default App
