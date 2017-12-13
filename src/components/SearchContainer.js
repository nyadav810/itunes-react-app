import React from 'react';
import SearchForm from './SearchForm';
import ResultList from './ResultList';
import './styles/SearchContainer.css';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],             // list of albums
            searchDone: false       // search results indicator
        };
    }

    handleSubmit = artist => {
        let url = `https://itunes.apple.com/search?term=${artist}&entity=album`;

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
            this.parseAlbums(jsonResponse.results);
        });
    }

    handleReset = () => {
        this.setState({
            albums: [],
            searchDone: false
        });
    }

    parseAlbums = results => {
        let albums = [];
        results.forEach(result => {
            let explicit = (result.collectionExplicitness === 'explicit');

            albums.push({
                id: result.collectionId,
                name: result.collectionCensoredName,
                explicit: explicit,
                artworkSrc: result.artworkUrl100
            });
        });
        this.setState({
            albums: albums
        });
    }

    render() {
        return (
            <div className="search-container">
                <h1>iTunes Album Search</h1>
                <SearchForm onSubmit={this.handleSubmit}
                            onReset={this.handleReset} />
                <hr />
                <ResultList albums={this.state.albums}
                            searchDone={this.state.searchDone} />
            </div>
        );
    }
}

export default SearchContainer;
