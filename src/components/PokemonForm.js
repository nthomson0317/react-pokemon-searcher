import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

state = {
  name: '',
  hp: '',
  frontUrl: '',
  backUrl: ''
  }
  


onFormInput = (event) => {
  event.preventDefault()
  this.setState({
[event.target.name]: event.target.value
  })
  console.log(this.state)
}

onSubmit = () => {
  fetch("http://localhost:3000/pokemon", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: this.state.name,
    hp: this.state.hp,
    sprites: {
    frontUrl: this.state.frontUrl,
    backUrl: this.state.backUrl
  }
  }),
})
  .then((r) => r.json())
  .then((pokemonObj) => this.props.addPokemon(pokemonObj))
  ;

}

  render() {

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            onChange={this.onFormInput}
            value={this.state.name}/>
            <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            onChange={this.onFormInput}
            value={this.state.hp}/>
            <Form.Input 
            fluid label="Front Image URL" 
            placeholder="url" name="frontUrl" 
            onChange={this.onFormInput}
            value={this.state.frontUrl} />
            <Form.Input 
            fluid label="Back Image URL" 
            placeholder="url" 
            name="backUrl" 
            onChange={this.onFormInput}
            value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
