import {
  SEARCH_SET_FILTERS,
  SEARCH_SET_QUERY,
  SEARCH_SET_RESULTS,
  SEARCH_ERROR_RESULTS,
  SEARCH_SET_SELECTED_RESULT } from '../actions/actionTypes';

const defaultState = {
    searchQuery: '',
    activeFilters: ['events', 'local-groups', 'regional-groups'],
    zoomLevel: 10,
    center: {lat: 0, lng: 0},
    bounds: {},
    searchResults: [],
    chosenResult: null
};

export default function (state=defaultState, action) {

    switch(action.type) {
        case SEARCH_SET_QUERY:
          return {
              ...state,
              searchQuery: action.data
          }
        case SEARCH_SET_FILTERS:
          return {
              ...state,
              activeFilters: action.data.filters
          }
        case SEARCH_SET_RESULTS:
          return {
            ...state,
            searchResults: action.data
          }
        case SEARCH_SET_SELECTED_RESULT:
          return {
            ...state,
            chosenResult: action.data.formatted_address,
            // searchQuery: action.data.
            bounds: action.data.geometry.bounds,
            center: action.data.geometry.location
          }
        default: return state;
    }
};
