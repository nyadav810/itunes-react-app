import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';
import './styles/ResultList.css';

function ResultList(props) {
    let albumTiles = props.albums.map((album, index) =>
        <div className="list-group-item col-md-4"
            key={album.id}>
            <Album
                  name={album.name}
                  explicit={album.explicit}
                  artworkSrc={album.artworkSrc} />
        </div>
    );

    let rows = [];

    for (let i = 0; i < albumTiles.length; i += 3) {
        let row = [];
        row.push(albumTiles[i], albumTiles[i + 1], albumTiles[i + 2]);

        let rowDiv = <div className="row" key={'row' + i}>{row}</div>;
        rows.push(rowDiv);
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
