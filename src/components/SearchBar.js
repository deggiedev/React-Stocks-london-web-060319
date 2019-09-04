import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.checked === 'Alphabetically'} onChange={(event) => props.handleSortChange(event)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.checked === 'Price'}  onChange={(event) => props.handleSortChange(event)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.handleDropdownChange(event)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
