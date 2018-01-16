import React from 'react';
import SearchForm1 from './SearchForm1';
import ResultList from './ResultList';
import { Divider, Header } from 'semantic-ui-react';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],             // list of albums
            searchDone: false,       // search results indicator
            media: 'music'
        };
    }

    createQueryString = (searchTerm, media) => {
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
    }

    handleSubmit = (searchTerm, media) => {
        let url = this.createQueryString(searchTerm, media);

        // make iTunes API GET request
        fetch(url).then(response => {
            this.setState({
                searchDone: true
            });

            if (response.ok) {
                return response.json();
            }
            return new Error("Request failed!");
        }).then(jsonResponse => {
            switch (media) {
                case 'music':
                    this.parseAlbums(jsonResponse.results);
                    break;
                case 'movie':
                    this.parseMovies(jsonResponse.results);
                    break;
                case 'tvShow':
                    this.parseTv(jsonResponse.results);
                    break;
                default:
                    break;
            }
        });
    }

    parseAlbums = results => {
        let albums = [];
        results.forEach(result => {
            let explicit = (result.collectionExplicitness === 'explicit');

            albums.push({
                id: result.trackId,
                name: result.collectionCensoredName,
                explicit: explicit,
                artworkSrc: result.artworkUrl100
            });
        });
        this.setState({
            results: albums,
            media: 'music'
        });
    }

    parseMovies = results => {
        let movies = [];
        results.forEach(result => {
            let id = result.trackId ? result.trackId : result.collectionId;
            let name = result.trackName ? result.trackName : result.collectionName;

            movies.push({
                id: id,
                name: name,
                artworkSrc: result.artworkUrl100
            });
        });
        this.setState({
            results: movies,
            media: 'movie'
        });
    }

    parseTv = results => {
        let tv = [];
        results.forEach(result => {
            let id = result.trackId ? result.trackId : result.collectionId;
            let name = result.trackName ? result.trackName : result.collectionName;

            tv.push({
                id: id,
                name: name,
                artworkSrc: result.artworkUrl100
            });
        });
        this.setState({
            results: tv,
            media: 'tvShow'
        });
    }

    render() {
        return (
            <div className="search-container">
                <Header as='h1'>iTunes Search</Header>
                <SearchForm1 onSubmit={this.handleSubmit} />
                <Divider />
                <ResultList media={this.state.media}
                            results={this.state.results}
                            searchDone={this.state.searchDone} />
            </div>
        );
    }
}

export default SearchContainer;
