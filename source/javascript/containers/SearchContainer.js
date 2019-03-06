import React from 'react';

import SearchView from '../components/SearchView';
import { connect } from 'react-redux';
import {searchAction} from '../actions/search';

class SearchContainer extends React.Component {

  constructor(props) {
    super(props);
    this.geocodeTimeout = null;
    this.state = {
      searchQuery: ''
    }
  }

  componentDidMount() {
  }

  handleSearch(event) {
    this.props.clearSearchResults();
    clearTimeout(this.geocodeTimeout);
    this.setState({searchQuery: event.target.value}, () => {
      this.geocodeTimeout = setTimeout(() => {
        this.props.searchLocation(this.state.searchQuery);
      }, 500);
    })
  }

  handleKeyPress(event) {
    if (event.key == "Enter") {
      if (this.props.searchResults !== undefined &&
          this.props.searchResults &&
          this.props.searchResults.length > 0) {
          this.props.selectResult(this.props.searchResults[0]);
          this.setState({searchQuery: this.props.searchResults[0].formatted_address});
          this.props.clearSearchResults();
          event.preventDefault();
          return false;
      }

      event.preventDefault();
      return false;
    }
    // return false;
  }

  handleSelect(item) {
    this.props.selectResult(item);
  }

  render() {
      return <SearchView
        searchQuery={this.state.searchQuery}
        activeFilters={this.props.activeFilters}
        zoomLevel={this.props.zoomLevel}
        center={this.props.center}
        handleSearch={this.handleSearch.bind(this)}
        handleKeyPress={this.handleKeyPress.bind(this)}
        searchResults={this.props.searchResults}
        selectResult={this.handleSelect.bind(this)}
      />;
  }
}

const mapStateToProps = ({ search }) => ({
    searchQuery: search.searchQuery,
    activeFilters: search.activeFilters,
    zoomLevel: search.zoomLevel,
    center: search.center,
    searchResults: search.searchResults.results,
    chosenResult: search.chosenResult,
    bounds: search.bounds
  });

const mapDispatchToProps = (dispatch) => ({
    searchLocation: (text) => {
      dispatch(searchAction.search(text));
    },
    clearSearchResults: () => {
      dispatch(searchAction.clearSearchResults())
    },
    selectResult: (item) => {
      dispatch(searchAction.selectResult(item))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
