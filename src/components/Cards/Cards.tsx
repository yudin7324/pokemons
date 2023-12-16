import { ChangeEvent, FC, useEffect, useState } from 'react'
import './_cards.scss'
import Card from '../Card/Card'
import { useGetAllPokemonsListQuery } from '../../services/pokemon'
import useDebounce from '../../hooks/useDebounce'
import Loader from '../Loader/Loader'

const Cards: FC = () => {
  const [pokemonsList, setPokemonsList] = useState<{ name: string, url: string}[]>([])
  const [filteredPokemonList, setFilteredPokemonList] = useState<{ name: string, url: string}[]>([])
  const [countCards, setCountCards] = useState<number>(16)
  const [query, setQuery] = useState<string>('')
  const { data, isLoading } = useGetAllPokemonsListQuery(1300)
  const debouncedQuery = useDebounce(query, 300)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  const handleOpenMoreCards = () => {
    setCountCards((countCards) => countCards + 16);
  }

  useEffect(() => {
    setPokemonsList(data?.results || [])
  }, [data]);

  useEffect(() => {
    setFilteredPokemonList(pokemonsList.filter((item) => item.name.toLowerCase().includes(debouncedQuery.toLowerCase())))
  }, [debouncedQuery, pokemonsList, query])

  return (
    <div className='cards'>
      <input className='cards__input' type="text" placeholder="Search..." value={query} onChange={handleInputChange} />
        {isLoading 
          ? <div className='cards__loader'><Loader /></div> 
          : <div className='cards__section'>
              {filteredPokemonList?.slice(0, countCards).map((pokemon) => <Card key={pokemon.name} name={pokemon.name} />)}
          </div>
        }

      {filteredPokemonList?.length > 0 && <button className='cards__more-btn' onClick={handleOpenMoreCards}>More</button>}  
    </div>
  )
}

export default Cards
