import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { initialItems } from "./data";
import "./index.css"; // Basic styling

export default function App() {
  const [allItems, setAllItems] = useState([]);
  const [filterText, setFilterText] = useState(""); // Default filter
  const [filteredItems, setFilteredItems] = useState([]);

  // Simulate fetching data
  useEffect(() => {
    const timer = setTimeout(() => {
      setAllItems(initialItems);
    }, 300); // Short delay
    return () => clearTimeout(timer);
  }, []);

  // Effect to apply the filter whenever allItems or filterText changes
  useEffect(() => {
    if (!filterText) {
      setFilteredItems(allItems); // Show all if filter is empty
    } else {
      const results = allItems.filter((item) => {
        return filterText.toLowerCase().includes(item.name.toLowerCase());
      });
      console.log("Filter results:", results);
      setFilteredItems(results);
    }
  }, [allItems, filterText]);

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
