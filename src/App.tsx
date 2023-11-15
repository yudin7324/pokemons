import { useEffect, useState } from "react"
import Cards from "./components/Cards/Cards"
// import Hero from "./components/Hero/Hero"
import { PokemonsType } from "./types/Pokemons";

function App() {
  const [pokemonsData, setPokemonsData] = useState<PokemonsType>(
    { count: 0, next: '', previous: '', results: []}
  );


  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json()

      setPokemonsData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData('https://pokeapi.co/api/v2/pokemon?limit=32&offset=0');
  }, []);

  const fetchNextPage = () => {
    if (pokemonsData && pokemonsData.next) {
      fetchData(pokemonsData.next);
    }
  };

  const fetchPreviousPage = () => {
    if (pokemonsData && pokemonsData.previous) {
      fetchData(pokemonsData.previous);
    }
  };

  return (
    <div className="container">
      {/* <Hero /> */}
      <Cards pokemons={pokemonsData.results} />
      <button className="button "onClick={fetchPreviousPage}>Prev</button>
      <button className="button" onClick={fetchNextPage}>Next</button>
    </div>
  )
}

export default App
