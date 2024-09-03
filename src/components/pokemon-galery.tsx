import { useEffect, useState } from "react"
import PokemonCard from "./pokemon-card"
import { GENERATIONS } from '../utils/pokemon-generations'

const PokemonGalery = ({pokemons}: any) => {

  const maxPokemonsPerPage = 15
  const [page, setPage] = useState(0)

  return (
    <div className="flex flex-col gap-5">
      <Pagination page={page} setPage={setPage} maxPokemonsPerPage={maxPokemonsPerPage} pokemons={pokemons} />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {
          pokemons.slice(page * maxPokemonsPerPage, (page + 1) * maxPokemonsPerPage).map((pokemon: any, index: number) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))
        }
      </div>
      <Pagination page={page} setPage={setPage} maxPokemonsPerPage={maxPokemonsPerPage} pokemons={pokemons} />
    </div>
  )
}

export default PokemonGalery

// component pagination

const Pagination = ({ page, setPage, maxPokemonsPerPage, pokemons }: any) => {

    const isMaxPage = page + 1 > pokemons.length / maxPokemonsPerPage
    const handleNext = () => {
        window.scrollTo(0, 0)
        if(isMaxPage) return
        setPage(page + 1)
    }
  
    const handlePrev = () => {
        if(page - 1 < 0) return
        setPage(page - 1)
    }
  
    return (
      <div className="flex justify-center gap-5 items-center">
        <button className="font-bold py-2 px-4 rounded bg-teal-100 hover:border-teal-500 disabled:bg-gray-100" onClick={handlePrev} disabled={page - 1 < 0}>Anterior</button>
        <span>página {page + 1} de {Math.ceil(pokemons.length / maxPokemonsPerPage)}</span>
        <button className="font-bold py-2 px-4 rounded bg-teal-100 hover:border-teal-500 disabled:bg-gray-100" onClick={handleNext} disabled={isMaxPage}>Siguiente</button>
      </div>
    )
}