import React from 'react';
import './styles/MediaOptions.css';

function MediaOptions(props) {
    return (
        <div className="media-options">
            <label className="radio-inline">
                <input type="radio"
                       name="media"
                       value="music"
                       checked={props.checked === 'music'}
                       onChange={props.onChange} />
                   Music
            </label>
            <label className="radio-inline">
                <input type="radio"
                       name="media"
                       value="movie"
                       checked={props.checked === 'movie'}
                       onChange={props.onChange} />
                   Movies
            </label>
            <label className="radio-inline">
                <input type="radio"
                       name="media"
                       value="tvShow"
                       checked={props.checked === 'tvShow'}
                       onChange={props.onChange} />
                   TV
            </label>
        </div>
    );
}

export default MediaOptions;
