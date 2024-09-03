 
import { useState } from 'react'
import { Pokemon } from '../types'
import { formatPokemonId } from '../utils/pokemon-format-id'

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {

  const [showModal, setShowModal] = useState(false)

  return (
    // CARD FOR POKEMON with tailwindcss
    <div className="container mx-auto">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={pokemon.sprites.front_default} alt={pokemon.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{pokemon.name}</div>
                <p className="text-gray-700 text-base">
                    {/* {pokemon.types.map((type: any, index: number) => (
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{type.type.name}</span>
                    ))} */}
                </p>
                <p className="text-gray-700 text-base">
                    {formatPokemonId(pokemon.species.id)}
                </p>
            </div>
            <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowModal(!showModal)}>Abilities</button>
            </div>
        </div>
        <PokemonModal abilities={pokemon.abilities} showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default PokemonCard

//modal to show abilities

const PokemonModal = ({ abilities, showModal, setShowModal }: any) => { 

  const handleShowModal = () => {
      setShowModal(!showModal)
  }
  
  return (
    // modal for abilities with tailwindcss
    <div className={`fixed z-10 inset-0 overflow-y-auto ${showModal ? 'block' : 'hidden'}`}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                Abilities
                            </h3>
                            <div className="mt-2">
                                <ul>
                                    {abilities.map((ability: any, index: number) => (
                                        <li key={index}>{ability.ability.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" onClick={handleShowModal} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

  )
}


