import React from 'react'
import { Card } from 'semantic-ui-react'


class PokemonCard extends React.Component {
  
  state = {
    flipped: false
  }
  
  handleClick = (event) => {
    let newFlippedValue = !this.state.flipped
    this.setState({
      flipped: newFlippedValue
    })
  }
  
  render() {
    return (
      <Card
      onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.state.flipped ? this.props.pokemonData.sprites.back : this.props.pokemonData.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonData.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonData.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard