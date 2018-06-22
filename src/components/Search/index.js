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
    const { userInput } = this.state;
    e.preventDefault();
    this.props.getStockQuotes(userInput);
    this.setState({ userInput: '' });
    e.target.reset();
  }

  render() {
    const { userInput } = this.state;
    return (
      <section className="search">
        <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            className="search__input"
            onChange={e => this.handleInputChange(e)}
            value={userInput}
            required
            placeholder="Enter stock symbol..."
          />
          <button className="search__button">Add</button>
        </form>
      </section>
    );
  }
}

export default Search;
