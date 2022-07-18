import React from "react";

function SearchBar({handleFilter, handleSortBy}) {

  let a=document.getElementById('alphabetical')
  let p=document.getElementById('price')
  console.log(a)

function onFilterChange(e){
  handleFilter(e.target.value);
  a.checked=false;
  p.checked=false;
  
}

function handleAlphaChange(e){
  handleSortBy(e.target.value);
}

function handlePriceChange(e){
  handleSortBy(e.target.value);
}


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
        id='alphabetical'
          type="radio"
          value="Alphabetically"
          name="sort"
          onChange={handleAlphaChange}
        />
        Alphabetically
      </label>
      <label>
        <input
        id='price'
          type="radio"
          value="Price"
          name="sort"
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
