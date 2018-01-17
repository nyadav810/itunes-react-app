import fetch from 'cross-fetch';
import { parseResponse } from './apiResponse';

export const REQUEST_CONTENT = 'REQUEST_CONTENT';
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_MEDIA = 'SET_MEDIA';

export const requestContent = (searchTerm) => ({
    type: REQUEST_CONTENT,
    searchTerm
});

export const receiveContent = (searchTerm, media, results) => ({
    type: RECEIVE_CONTENT,
    searchTerm,
    response: parseResponse(media, results),
    recievedAt: Date.now()
});

const createQueryString = (searchTerm, media) => {
    let url = `https://itunes.apple.com/search?term=${searchTerm}&media=${media}`;

    switch (media) {
        case 'music':
            url += '&entity=album';
            break;
        case 'movie':
            url += '&entity=movie';
            break;
        case 'tvShow':
            url += '&entity=tvSeason';
            break;
        default:
            break;
    }

    return url;
};

export const fetchContent = (searchTerm, media) => (
    (dispatch) => {
        dispatch(requestContent(searchTerm));

        let url = createQueryString(searchTerm, media);

        // make iTunes API GET request
        fetch(url).then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        ).then(json => dispatch(receiveContent(searchTerm, media, json.results)));
    }
);

export const setSearchTerm = (searchTerm) => ({
    type: SET_SEARCH_TERM,
    searchTerm
});

export const setMedia = (media) => ({
    type: SET_MEDIA,
    media
});
