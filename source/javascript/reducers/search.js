import {
  SEARCH_SET_FILTERS,
  SEARCH_SET_QUERY,
  SEARCH_SET_RESULTS,
  SEARCH_ERROR_RESULTS,
  SEARCH_SET_SELECTED_RESULT } from '../actions/actionTypes';

import zipcodes from '../assets/data/zipcodes.json';

const defaultState = {
    searchQuery: '',
    activeFilters: ['Volunteer for Tiffany', 'Meet Tiffany'],
    zoom: null,
    center: null,
    bounds: null,
    searchResults: [],
    chosenResult: null,
    zipcodes: zipcodes,
    chosenZipcode: null
};

export default function (state=defaultState, action) {

    switch(action.type) {
        case "SEARCH_MAP_IS_LOADED":
          return {
            ...state,
            map: action.data
          }
        case "SEARCH_UPDATE_MAP_INFORMATION":
          return {
            ...state,
            zoom: action.data.zoom || state.zoom,
            center: action.data.center || state.center,
            bounds: action.data.bounds || state.bounds
          }
        case "SEARCH_SELECT_ZIPCODE":
          return {
            ...state, 
            chosenZipcode: action.zipcode,
            zoom: [14],
            center: state.zipcodes[action.zipcode] && state.zipcodes[action.zipcode],
          }
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
