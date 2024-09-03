export const formatPokemonId = (id: number) => {
    const idString = id.toString().padStart(4, '0')
    return `N.º ${idString}`
}