 
import { useState } from 'react'
import { Pokemon, PokemonModalProps } from '../types'
import { formatPokemonId } from '../utils/pokemon-format-id'

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
        <section className="container mx-auto hover:translate-y-2 transition-transform" onClick={() => setShowModal(true)}>
            <div className="max-w-sm rounded overflow-hidden border-1 shadow-lg p-4">
                <span className="text-left bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{pokemon.species.generation.name.split("-")[1]}</span>
                <img className="w-48 mx-auto" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className="px-6 py-4">
                    {/* badge with tailwind to remind generation */}
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
            </div>
        </section>
        <PokemonModal abilities={pokemon.abilities} stats={pokemon.stats} height={pokemon.height} weight={pokemon.weight} showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}

export default PokemonCard

const PokemonModal = ({ abilities, stats, height, weight, showModal, setShowModal }: PokemonModalProps) => { 

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
                            {/* beautiful distribution for stat, abilities, height and  weight*/}
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                Estadística
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    {stats.map((stat: any, index: number) => (
                                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{stat.stat.name}: {stat.base_stat}</span>
                                    ))}
                                </p>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                Habilidades
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    {abilities.map((ability: any, index: number) => (
                                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{ability.ability.name}</span>
                                    ))}
                                </p>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                Altura
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    {height}
                                </p>
                            </div>

                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                Peso
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    {weight}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" onClick={handleShowModal} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-500 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </div>

  )
}


