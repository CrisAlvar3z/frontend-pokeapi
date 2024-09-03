export type Pokemon = {
    id: number
    name: string
    height: number
    weight: number
    abilities: {
        ability: {
            name: string
        }
    }[]
    sprites: {
        front_default: string
    }
    species: {
        id: number
        generation: {
            name: string
        }
    } 
}