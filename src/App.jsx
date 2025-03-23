import React from "react"
import Search from "./components/search"
import {useState} from 'react' 

const app = () => {

  // We make the search state here so it is tied to main scope
  const [searchTerm, setSearchTerm] = useState('');

  return ( 
    <main>
      <div className="pattern" /> 

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span> You Will Enjoy Without The Hassle</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <p className="text-3xl text-white">{searchTerm}</p>
      </div>
    </main>
   );
}
 
export default app;