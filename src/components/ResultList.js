import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';
import { Grid } from 'semantic-ui-react';

function ResultList({ searchTerm, media, content }) {
    let tiles;

    if (content[searchTerm]) {
        let results = content[searchTerm].items.sort((a, b) => {
            return b.date - a.date;
        });

        tiles = results.map((tile, index) =>
            <Grid.Column key={tile.id}
                         textAlign='left'>
                <Tile
                      name={tile.name}
                      artworkSrc={tile.artworkSrc}
                      price={tile.price}
                      genre={tile.genre}
                      date={tile.date} />
            </Grid.Column>
        );
    }

    let rows = [];

    if (tiles) {
        for (let i = 0; i < tiles.length; i += 3) {
            let row = [];
            row.push(tiles[i], tiles[i + 1], tiles[i + 2]);

            let rowDiv = <Grid.Row>{row}</Grid.Row>;
            rows.push(rowDiv);
        }
    }

    // search performed, no results found
    // if (props.searchDone && !rows.length) {
    //     rows = <h2>No results found.</h2>;
    // }

    let isGridVisible = rows.length ? 'visible' : 'hidden';

    return (
        <div className="result-list"
             style={{
                 visibility: isGridVisible
             }}>
            <Grid
                  columns={3}
                  celled
                  style={{
                      maxWidth: 1200,
                      margin: '0 auto'
                  }}>
                  { rows }
            </Grid>
        </div>
    );
}

ResultList.propTypes = {
    searchTerm: PropTypes.string,
    media: PropTypes.string,
    content: PropTypes.object
};

export default ResultList;
