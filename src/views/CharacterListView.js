import React from "react";
import { connect } from "react-redux";
import { getCharacters } from "../actions/index";

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      console.log(this.props.fetching);
      return <div>FETCHING DATA...</div>;
    }
    console.log(this.props.characters);
    {
      if (this.props.characters.results.length > 0) {
        return (
          <div className="CharactersList_wrapper">
            <CharacterList characters={this.props.characters.results} />
          </div>
        );
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getCharacters
  }
)(CharacterListView);
