import React from 'react'
import { IoIosSearch } from "react-icons/io";
function SearchBar() {
    return (
        <div className="searchBar">
            <div className="searchIcon">
            <IoIosSearch/>
            </div>
            <input type="search" name="searchBar" id="searchBar__input" placeholder="Type to search"/>
        </div>
    )
}

export default SearchBar
