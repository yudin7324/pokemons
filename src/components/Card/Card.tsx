import { FC, useEffect, useState } from 'react';
import './_сard.scss';
// import { PokemonType } from '../../types/Pokemon';
import { useGetPokemonByNameQuery } from '../../services/pokemon';
import Loader from '../Loader/Loader';
import { PokemonType } from '../../types/Pokemons';
// import { ReactSVG } from 'react-svg'
// import background from '../../images/card-bg.svg'
interface CardProps {
  name: string
}

const Card: FC<CardProps> = ({ name }) => {
  const [pokemonData, setPokemonData] = useState<PokemonType>();
  const { data, isLoading } = useGetPokemonByNameQuery(name)

  useEffect(() => {
    setPokemonData(data)
  }, [data])

  return (
    <div className='card'>
      <h2 className='card__title'>{name}</h2>

      {isLoading 
        ? <div className='card__loader'><Loader /></div> 
        : <div className='card__content'>
            <img className='card__img' src={pokemonData?.sprites.other?.['official-artwork'].front_default} alt="image" />
            <div className='card__stats'>
            <div className='card__stats-number'>#{pokemonData?.id}</div>
            {pokemonData?.types.map((type) => <div key={type.type.url} className={`card__stats-type card__stats-type--${type. type.name}`}>{type.type.name}</div>)}        
            </div>
          </div>
      }
    </div>
  )
}

export default Card
