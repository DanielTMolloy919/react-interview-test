import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { initialItems } from "./data";
import "./index.css"; // Basic styling

export default function App() {
  const [allItems, setAllItems] = useState([]);
  const [filterText, setFilterText] = useState("");
  // Simulate fetching data
  useEffect(() => {
    const timer = setTimeout(() => {
      setAllItems(initialItems);
    }, 300); // Short delay
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = !filterText
    ? allItems
    : allItems.filter((item) =>
        filterText.toLowerCase().includes(item.name.toLowerCase())
      );

  return (
    <div className="App">
      <h1>My Filterable List</h1>
      <div>
        <label htmlFor="filter">Filter by starting letter: </label>
        <input
          id="filter"
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <ItemList items={filteredItems} />
    </div>
  );
}
