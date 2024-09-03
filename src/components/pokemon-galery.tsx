import { useEffect, useState } from "react"
import PokemonCard from "./pokemon-card"
import { GENERATIONS } from '../utils/pokemon-generations'

const PokemonGalery = ({pokemons}: any) => {

  const pokemonsPerGeneration = 10
  const [page, setPage] = useState(0)
  const [pokemonsByGeneration, setPokemonsByGeneration] = useState<any>({})

  useEffect(() => {
    setPokemonsByGeneration(
        pokemons.reduce((acc: any, pokemon: any) => {
            const generation = pokemon.species.generation.name
            if (!acc[generation]) {
                acc[generation] = []
            }
            acc[generation].push(pokemon)
            return acc
        }, {})
    )
  }, [pokemons])

  useEffect(() => {
    console.log('pokemonsByGeneration', pokemonsByGeneration)
  }, [pokemonsByGeneration])

  const handleNext = () => {
      setPage(page + 1)
  }

  const handlePrev = () => {
      setPage(page - 1)
  }

  return (
    <div>
      <h1>Pokemon Galery</h1>
      {
        GENERATIONS.map((generation: string) => {
          return pokemonsByGeneration[generation]?.map((pokemon: any, index: number) => (
              <PokemonCard key={index} pokemon={pokemon} />
          ))
        })
      }

      {/* Pagination */}
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    

    </div>
  )
}

export default PokemonGalery