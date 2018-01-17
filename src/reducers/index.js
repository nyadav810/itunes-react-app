import { combineReducers } from 'redux';
import content from './content';
import media from './media';
import searchTerm from './searchTerm';

const iTunesApp = combineReducers({
    content,
    media,
    searchTerm
});

export default iTunesApp;
