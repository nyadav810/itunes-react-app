import React from 'react';
import PropTypes from 'prop-types';
import { Form, Grid } from 'semantic-ui-react';
import RadioButtonContainer from '../containers/RadioButtonContainer';
import SearchTextBox from '../containers/SearchTextBox';

const SearchForm = ({ onSubmit }) => {
    return (
        <Form onSubmit={e => {
                        e.preventDefault();
                        onSubmit(); }}>
            <Grid centered
                  textAlign='center'>
                <Grid.Column width={6}>
                    <SearchTextBox />
                    <Grid centered
                          textAlign='center'>
                          <Grid.Row>
                              <Form.Group>
                                   <RadioButtonContainer label='Music'
                                                         value='music' />
                                   <RadioButtonContainer label='Movies'
                                                         value='movies' />
                                   <RadioButtonContainer label='TV'
                                                         value='tvShow' />
                              </Form.Group>
                          </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid>
        </Form>
    );
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func
};

export default SearchForm;
