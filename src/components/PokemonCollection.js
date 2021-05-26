import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {

    console.log(this.props.pokemons)

    

    //switch render pokemons to render filterPokemons
   let renderPokemons = this.props.pokemons.map(pokemonObj =>{
     return <PokemonCard 
     pokemonData={pokemonObj}/>

   })

    return (
      
      <Card.Group itemsPerRow={6}>
        
        <h1>Hello From Pokemon Collection</h1>
        {renderPokemons}
        
      </Card.Group>
    )
  }
}

export default PokemonCollection
