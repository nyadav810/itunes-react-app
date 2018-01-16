import { SET_SEARCH_RESULTS } from '../actions';

const searchResults = (state = [], action) => {
    switch (action.type) {
        case SET_SEARCH_RESULTS:
            return action.results;
        default:
            return state;
    }
};

export default searchResults;
