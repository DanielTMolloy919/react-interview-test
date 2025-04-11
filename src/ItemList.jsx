import React from "react";

// Simple component, assumes keys will be handled correctly in App.js map
function ItemList({ items }) {
  if (!items || items.length === 0) {
    return <p>No items match the filter.</p>;
  }
  return (
    <ul>
      {items.map((item) => (
        // We'll add the key here now as it's not the bug focus
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ItemList;