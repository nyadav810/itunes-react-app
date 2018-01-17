import { REQUEST_CONTENT, RECEIVE_CONTENT } from '../actions';

const content = (
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) => {
    switch (action.type) {
        case REQUEST_CONTENT:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_CONTENT:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.response,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
};

const contentBySearchTerm = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_CONTENT:
        case RECEIVE_CONTENT:
            return Object.assign({}, state, {
                [action.searchTerm]: content(state[action.searchTerm], action)
            });
        default:
            return state;
    }
}

export default contentBySearchTerm;
