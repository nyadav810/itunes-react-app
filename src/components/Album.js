import React from 'react';
import PropTypes from 'prop-types';

function Album(props) {
    let albumDisplayText = `${props.name} ${(props.explicit ? '(Explicit)' : '')}`;

    return (
        <div className="album">
            <p>{albumDisplayText}</p>
            <img src={props.artworkSrc} alt={props.name} />
        </div>
    );
}

Album.propTypes = {
    name: PropTypes.string,
    explicit: PropTypes.bool,
    artworkSrc: PropTypes.string
};

export default Album;
