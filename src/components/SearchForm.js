import React from 'react';
import PropTypes from 'prop-types';
import { Form, Grid, Radio } from 'semantic-ui-react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            media: 'music'
        };
    }

    handleInputChange = (event, {value}) => this.setState({ searchTerm: value });

    handleRadioChange = (event, {value}) => this.setState({ media: value });

    handleSubmit = event => {
        if (this.state.searchTerm) {
            this.props.onSubmit(this.state.searchTerm, this.state.media)
        } else {

        }
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Grid centered
                      textAlign='center'>
                    <Grid.Column width={6}>
                        <Form.Input
                            autoFocus
                            action={{ icon: 'search', color: 'blue' }}
                            placeholder='Search'
                            onChange={this.handleInputChange}
                            size='large'/>
                        <Grid centered
                              textAlign='center'>
                              <Grid.Row>
                                  <Form.Group>
                                       <Form.Field>
                                           <Radio
                                              label='Music'
                                              name='radioGroup'
                                              value='music'
                                              checked={this.state.media === 'music'}
                                              onChange={this.handleRadioChange} />
                                       </Form.Field>
                                       <Form.Field>
                                           <Radio
                                              label='Movies'
                                              name='radioGroup'
                                              value='movie'
                                              checked={this.state.media === 'movie'}
                                              onChange={this.handleRadioChange} />
                                       </Form.Field>
                                       <Form.Field>
                                           <Radio
                                              label='TV'
                                              name='radioGroup'
                                              value='tvShow'
                                              checked={this.state.media === 'tvShow'}
                                              onChange={this.handleRadioChange} />
                                       </Form.Field>
                                  </Form.Group>
                              </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </Form>
        );
    }
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func
};

export default SearchForm;
