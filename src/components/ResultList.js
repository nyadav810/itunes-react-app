import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';
import Tile from './Tile';
import './styles/ResultList.css';

function ResultList({ searchTerm, media, content }) {
    let tiles;

    if (content[searchTerm]) {
        let results = content[searchTerm].items;

        switch (media) {
            case 'music':
                tiles = results.map((album, index) =>
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
            case 'tvShow':
                tiles = results.map((tile, index) =>
                    <div className="list-group-item col-md-4"
                        key={tile.id}>
                        <Tile
                              name={tile.name}
                              artworkSrc={tile.artworkSrc} />
                    </div>
                );
                break;
            default:
                break;
        }
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
    // if (props.searchDone && !rows.length) {
    //     rows = <h2>No results found.</h2>;
    // }

    return (
        <div className="result-list">
            <div className="container">{rows}</div>
        </div>
    );
}

ResultList.propTypes = {
    searchTerm: PropTypes.string,
    media: PropTypes.string,
    content: PropTypes.object
};

export default ResultList;
