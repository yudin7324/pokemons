export type PokemonType = {
  abilities: {
    ability: {
      name: string,
      url: string,
    },
    is_hidden: boolean,
    slot: number
  }[],
  base_experience: number,
  forms: {
    name: string,
    url: string,
  }[],
  game_indices: {
    game_index: number,
    version: {
      name: string,
      url: string,
    }
  }[],
  height: number,
  held_items: [],
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: {
    move: {
      name: string,
      url: string,
    },
    version_group_details: {
        level_learned_at: number,
        move_learn_method: {
          name: string,
          url: string,
        },
        version_group: {
          name: string,
          url: string,
        }
    }[],
  }[],
  name: string,
  order: number,
  past_abilities: [],
  past_types: [],
  species: {
    name: string,
    url: string,
  },
  sprites: {
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female:string,
    other: {
      dream_world: {
        front_default: string,
        front_female: string,
      },
      home: {
        front_default: string,
        front_female: string,
        front_shiny: string,
        front_shiny_female: string,
      },
      "official-artwork": {
        front_default: string,
        front_shiny: string,
      }
    },
  }
  stats: {
    base_stat: number,
    effort: number,
    stat: {
      name: string,
      url: string,
    }
  },
  types: {
    slot: 1,
    type: {
      name: string,
      url: string
    }
  }[],
  weight: number
}
  

export type PokemonsType = {
  count: number,
  next: string,
  previous: string,
  results: {
    name: string,
    url: string
  }[]
}

