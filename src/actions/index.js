export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const SET_MEDIA = 'SET_MEDIA';

export const setSearchTerm = (searchTerm) => ({
    type: SET_SEARCH_TERM,
    searchTerm
});

export const setSearchResults = (results) => ({
    type: SET_SEARCH_RESULTS,
    results
});

export const setMedia = (media) => ({
    type: SET_MEDIA,
    media
});
