import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchBar: ''
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
  .then((r) => r.json())
  .then((pokemonsArray) => this.setState({
    pokemons: pokemonsArray
  }));
}


  handleSearchBarChange = (event) =>{
    this.setState({
      searchBar: event
    })
  }
  
addPokemon = (newPokemonObj) => {
  let copyOfPokemonArray = [...this.state.pokemons, newPokemonObj]
  this.setState({
    pokemons: copyOfPokemonArray
  })
}
  
  render() {
    let filterPokemons= this.state.pokemons.filter(pokemonObj=>{
      return (pokemonObj.name.toLowerCase().includes(this.state.searchBar.toLowerCase()))
     })
   

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
        addPokemon={this.addPokemon}/>
        <br />
        <Search 
        handleSearchBarChange={this.handleSearchBarChange}
        searchBarValue={this.state.searchBar}/>
        <br />
        <PokemonCollection
        pokemons={filterPokemons}
        searchBar={this.state.searchBar}
        />
      </Container>
    )
    
  }

}
export default PokemonPage
