
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

  import React, { Component } from 'react';
const API = 'https://jsonplaceholder.typicode.com/todos';
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
        hits: [],
    };
  }
 
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }
 
  render() {
    const { hits } = this.state;
    return (
      <ul>
        {hits.map(hit =>
          <li key={hit.UserId}>
            <p>{hit.id}</p><br/>
            <p>{hit.title}</p><br/>
            <p>{hit.completed}</p><br/>
          </li>
        )}
      </ul>
    );
  }

}
 
export default App;