// Pokemon service
import axiosInstance from "../axiosConfig"

export const getPokemon = async (name: string) => {
    const response = await axiosInstance.get(`pokemon/${name}`)
    return response.data
}

export const getPokemonType = async () => {
    const response = await axiosInstance.get('type')
    return response.data.results
}

export const getPokemonByType: any = async (type: string) => {
    const response = await axiosInstance.get(`type/${type}`)
    // get fetch from url in response
    const pokemons = await Promise.all(response.data.pokemon.map(async (pokemon: any) => {
        const response = await axiosInstance.get(pokemon.pokemon.url)
        // now add species data from each url
        const species = await axiosInstance.get(response.data.species.url) as any

        return {
            name: response.data.name,
            height: response.data.height,
            weight: response.data.weight,
            abilities: response.data.abilities,
            sprites: response.data.sprites,
            species: species.data,
            stats: response.data.stats
        }


    }))

    return pokemons
}

//get pokemon-species 
export const getPokemonSpecies = async (name: string) => {
    const response = await axiosInstance.get(`pokemon-species/${name}`)
    return response.data
}

