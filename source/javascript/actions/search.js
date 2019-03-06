import {
  SEARCH_SET_FILTERS,
  SEARCH_SET_QUERY,
  SEARCH_SET_RESULTS,
  SEARCH_ERROR_RESULTS,
  SEARCH_SET_SELECTED_RESULT } from './actionTypes';

import Geocode from 'react-geocode';

const GOOGLE_API_KEY = "AIzaSyCW2bP6hUaZLATaAX-7Nfj5r4ISVsj99j8";
Geocode.setApiKey(GOOGLE_API_KEY);
Geocode.enableDebug();



const setFilters = (filters) => {

    return {
        type: SEARCH_SET_FILTERS,
        data: { filters }
    };
}

const clearSearchResults = ()=> {
  return {
    type: SEARCH_SET_RESULTS,
    data: {}
  };
}

const selectResult = (item) => {
  console.log("~~~> ITEM __>", item);
  return {
    type: SEARCH_SET_SELECTED_RESULT,
    data: item
  }
}

const search = (text) => {
  return (dispatch) => {
  // this.geocodeTimeout = setTimeout(() => {
    dispatch({
      type: SEARCH_SET_QUERY,
      data: text
    });

    Geocode.fromAddress(text).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        return dispatch({
            type: SEARCH_SET_RESULTS,
            data: response
        });
      },
      error => {
        console.log("HERE", error);
        return dispatch({
            type: SEARCH_ERROR_RESULTS,
            data: error
        });
      }
    );
  // }, 500);
  }
}


export const searchAction = {
    setFilters,
    search,
    clearSearchResults,
    selectResult
};
