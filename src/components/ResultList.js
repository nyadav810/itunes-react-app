import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';
import Tile from './Tile';
import './styles/ResultList.css';

function ResultList(props) {
    let tiles;

    switch (props.media) {
        case 'music':
            tiles = props.results.map((album, index) =>
                <div className="list-group-item col-md-4"
                    key={album.id}>
                    <Album
                          name={album.name}
                          explicit={album.explicit}
                          artworkSrc={album.artworkSrc} />
                </div>
            );
            break;
        case 'movie':
            tiles = props.results.map((movie, index) =>
                <div className="list-group-item col-md-4"
                    key={movie.id}>
                    <Tile
                          name={movie.name}
                          artworkSrc={movie.artworkSrc} />
                </div>
            );
            break;
        case 'tvShow':
            tiles = props.results.map((tv, index) =>
                <div className="list-group-item col-md-4"
                    key={tv.id}>
                    <Tile
                          name={tv.name}
                          artworkSrc={tv.artworkSrc} />
                </div>
            );
            break;
        default:
            break;
    }

    let rows = [];

    if (tiles) {
        for (let i = 0; i < tiles.length; i += 3) {
            let row = [];
            row.push(tiles[i], tiles[i + 1], tiles[i + 2]);

            let rowDiv = <div className="row" key={'row' + i}>{row}</div>;
            rows.push(rowDiv);
        }
    }

    // search performed, no results found
    if (props.searchDone && !rows.length) {
        rows = <h2>No results found.</h2>;
    }

    return (
        <div className="result-list">
            <div className="container">{rows}</div>
        </div>
    );
}

ResultList.propTypes = {
    albums: PropTypes.array,
    searchDone: PropTypes.bool
};

export default ResultList;
