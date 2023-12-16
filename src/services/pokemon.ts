import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../utils/api'
import { PokemonType, PokemonsType } from '../types/Pokemons'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllPokemonsList: builder.query<PokemonsType, number>({
      query: (count: number) => `pokemon?limit=${count}`,
    }),
    getPokemonByName: builder.query<PokemonType, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetAllPokemonsListQuery, useGetPokemonByNameQuery } = pokemonApi
