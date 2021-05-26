import React, { Component } from 'react'
import PokemonPage from './components/PokemonPage'
import './App.css'


export default class App extends Component {

  

  render() {
    // console.log(this.state)
    return (
      <div className="App">
      <PokemonPage/>
    </div>
    )
  }
}

