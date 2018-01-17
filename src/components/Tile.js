import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Image } from 'semantic-ui-react';
import { formatDate } from '../util';

function Tile(props) {
    let formattedDate = formatDate(props.date);
    let price = props.price ? `$${props.price}` : '';

    return (
        <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column width={6}>
                    <Image size='large'
                           floated='left'
                           src={props.artworkSrc}
                           alt={props.name} />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Header as='h3'>{props.name}</Header>
                    <ul style={{
                        listStyleType: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        <li>{formattedDate}</li>
                        <li>{props.genre}</li>
                        <li>{price}</li>
                    </ul>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

Tile.propTypes = {
    name: PropTypes.string,
    artworkSrc: PropTypes.string
};

export default Tile;
