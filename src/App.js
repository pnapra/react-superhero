import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

  async function searchSuperHeroes () {
    const response = await fetch(`https://www.superheroapi.com/api.php/1601739980181108/search/${searchText}`);
    const data = await response.json();
    console.log("searchSuperHeroes -> data", data)

    setSuperheroData(data.results);
  }

  function handleChange (e) {
    const searchTerm = e.target.value;
    
    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length >= 3) {
      searchSuperHeroes();
    }
  }

  return (
    <div className="container">
    <Navbar />
    <div className="">
      <SearchBar searchText={searchText} handleChange={handleChange} />
      <SearchResults superheroData={superheroData} />
    </div>
  </div>
  );
}

export default App;