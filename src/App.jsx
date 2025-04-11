
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { initialItems } from "./data";
import "./index.css"; // Basic styling

export default function App() {
  const [allItems, setAllItems] = useState([]);
  const [filterText, setFilterText] = useState("A"); // Default filter
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
    console.log("Applying filter:", filterText);
    if (!filterText) {
      setFilteredItems(allItems); // Show all if filter is empty
    } else {
      // INTENTIONAL LOGIC BUG: Incorrect comparison
      const results = allItems.filter(item => {
        // BUG: Checks if the name *is exactly* the filterText, not if it *starts with* it
        // Also, maybe make it case-sensitive initially for another layer
        // return item.name === filterText;
        // Let's make the bug: using includes() but on the wrong string
        return filterText.toLowerCase().includes(item.name.toLowerCase()); // WRONG WAY AROUND!
      });
      console.log("Filter results:", results);
      setFilteredItems(results);
    }
  }, [allItems, filterText]); // Dependencies for the effect


  // --- Feature 1 Placeholder ---
  const addItem = () => {
    console.log("Add item clicked - Placeholder");
  };

  // --- Feature 2 Placeholder ---
  // Remove item logic would likely modify allItems and let the filter effect run

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

      {/* --- Feature 1 Button Placeholder --- */}
      {/* <button onClick={addItem}>Add Hardcoded Item</button> */}
    </div>
  );
}