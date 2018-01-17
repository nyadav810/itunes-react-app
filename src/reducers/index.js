import { combineReducers } from 'redux';
import content from './content';
import media from './media';
import searchResults from './searchResults';
import searchTerm from './searchTerm';

const iTunesApp = combineReducers({
    content,
    media,
    searchResults,
    searchTerm
});

export default iTunesApp;
