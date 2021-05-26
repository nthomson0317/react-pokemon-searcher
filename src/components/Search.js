import React from 'react'

const Search = props => {


  let handleSearch = (event) => {
    props.handleSearchBarChange(event.target.value)
    console.log(event.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        className="prompt"
        onChange={handleSearch}
        value={props.searchBarValue}
        />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
