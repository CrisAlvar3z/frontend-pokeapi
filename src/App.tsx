import { useEffect, useState } from 'react'
import { getPokemon, getPokemonByType, getPokemonType } from './api/services/PokemonService'
import './App.css'
import { Pokemon } from './types'
import PokemonCard from './components/pokemon-card'
import PokemonSearch from './components/pokemon-search'
import PokemonGalery from './components/pokemon-galery'
import { Loading } from './components/loading'

function App() {
  //const [count, setCount] = useState(0)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [pokemonTypes, setPokemonType] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemonType()
      setPokemonType(response)
    }
    fetchData()
  }, [])

  const handleSearch = async (value: string) => {
    setLoading(true)
    try {
      const response = await getPokemonByType(value)
      setLoading(false)
      console.log('response', response)
      if(response) { 
        setPokemons(response)
      } else {
        new Error('Error')
      }

    } catch (error) {
      setLoading(false)
      alert('Ocurrio un error')
    }
  }

  return (
    <>
      <h1> Pokemon API </h1>

      <PokemonSearch pokemonTypes={pokemonTypes} onHandleSearch={handleSearch} />

      {
        !loading ? pokemons.length > 1 && <PokemonGalery pokemons={pokemons} /> : <Loading />
      }

    </>
  )
}

export default App
