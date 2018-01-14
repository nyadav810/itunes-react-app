import { combineReducers } from 'redux';
import media from './media';
import searchResults from './searchResults';
import searchTerm from './searchTerm';

const iTunesApp = combineReducers({
    media,
    searchResults,
    searchTerm
});

export default iTunesApp;
