import React from 'react';

class SearchBar extends React.Component {

  // convention for naming: on - element - event 
  // the name of the callback doesn't matter, but 
  // it is good to name for clarity
  state = { term: '' };

  // note: do not use () when using a callback function like onInputChange
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;