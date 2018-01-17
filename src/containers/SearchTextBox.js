import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { setSearchTerm } from '../actions';

let SearchTextBox = ({ dispatch }) => {
    return (
        <Form.Input
            autoFocus
            action={{ icon: 'search', color: 'blue' }}
            placeholder='Search'
            onChange={e => {
                e.preventDefault();
                dispatch(setSearchTerm(e.target.value));
            }}
            size='large' />
    );
};

SearchTextBox = connect()(SearchTextBox);

export default SearchTextBox;
