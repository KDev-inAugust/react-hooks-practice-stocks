import React, {useState, useEffect} from "react";

function SearchBar({handleFilter, handleSortBy}) {

  let [alphaChecked, setAlphaChecked]=useState(null)
  let [priceChecked, setPriceChecked]=useState(null)



function onFilterChange(e){
  handleFilter(e.target.value);
  setAlphaChecked(false);
  setPriceChecked(false);
  
}

function handleAlphaChange(e){
  handleSortBy(e.target.value);
  
}

function handlePriceChange(e){
  handleSortBy(e.target.value);
 
}

console.log(alphaChecked)

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphaChecked}
          onChange={handleAlphaChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={priceChecked}
          onChange={handlePriceChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={onFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
