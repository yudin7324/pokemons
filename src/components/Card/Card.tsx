import { FC, useEffect, useState } from 'react';
import './_сard.scss';
import { PokemonDataType } from '../../types/Pokemons';
interface CardProps {
  name: string
  url: string
}

const Card: FC<CardProps> = ({ name, url }) => {
  const [pokemonsData, setPokemonsData] = useState<PokemonDataType>();

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
    fetchData(url);
  }, [url]);

  console.log(pokemonsData)
  
  if (!pokemonsData) {
    return null
  }

  return (
    <div className='card'>
      <h2 className='card__title'>{name}</h2>
      <div className='card__content'>
        <img className='card__img' src={pokemonsData.sprites.other?.['official-artwork'].front_default} alt="image" />
        <div className='card__stats'>
        <div>base exp: {pokemonsData.base_experience}</div>
        <div>height: {pokemonsData.height}</div>
        <div>weight: {pokemonsData.weight}</div>
      </div>
      </div>
    </div>
  )
}

export default Card
