
export type PokemonDataType = {
  id: number,
  name: string,
  base_experience: number,
  height: number,
  is_default: true,
  order: number,
  weight: number,
  
  sprites: {
    other: {
      'official-artwork': {
        'front_default': string
      },
      'dream_world': {
        'front_default': string
      },
      "home": {
        "front_default": string,
        "front_female": null,
        "front_shiny": string,
        "front_shiny_female": null
      },
    },
  },
}

export type PokemonType = {
  name: string,
  url: string
}

export type PokemonsType = {
  count: number,
  next: string,
  previous: string,
  results: PokemonType[]
}

