import React from 'react';
import PropTypes from 'prop-types';

function Tile(props) {
    return (
        <div className="tile">
            <p>{props.name}</p>
            <img src={props.artworkSrc} alt={props.name} />
        </div>
    );
}

Tile.propTypes = {
    name: PropTypes.string,
    artworkSrc: PropTypes.string
};

export default Tile;
