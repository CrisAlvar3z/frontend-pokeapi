import { useState } from "react"

const PokemonSearch = ({ pokemonTypes, onHandleSearch }: any) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (e: any) => {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }
    
    return (
      <div className="container mx-auto">
          <div className="max-w-sm rounded-[16px] overflow-hidden shadow-lg">
              <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Buscar Pokemon</div>
              <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Pokemon name" aria-label="Full name" list="pokemon" onChange={handleInputValue}/>
                  <datalist id="pokemon">
                      {
                          pokemonTypes?.map((pokemon: any, index: number) => (
                              <option key={index} value={pokemon.name} />
                          ))
                      }
                  </datalist>
                  
                  <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button"
                    onClick={() => onHandleSearch(inputValue)}
                  >
                    Buscar
                  </button>
              </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default PokemonSearch