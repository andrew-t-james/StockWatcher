import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
    };
  }

  handleInputChange(e) {
    const { value } = e.target;

    this.setState({
      userInput: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('working'); // TODO call fetch method here
    e.target.reset();
    this.setState({ userInput: '' });
  }

  render() {
    const { userInput } = this.state;
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          onChange={e => this.handleInputChange(e)}
          value={userInput}
          placeholder="Please Enter a symbol..."
        />
        <button>Add</button>
      </form>
    );
  }
}

export default Search;
