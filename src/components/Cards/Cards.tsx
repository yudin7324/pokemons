import { FC } from 'react'
import './_cards.scss'
import Card from '../Card/Card'
import { PokemonType } from '../../types/Pokemons'

interface CardsProps {
  pokemons: PokemonType[]
}

const Cards: FC<CardsProps> = ({ pokemons }) => {

  return (
    <div className='cards'>
      {pokemons?.map((pokemon) => <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />)}
    </div>
  )
}

export default Cards
