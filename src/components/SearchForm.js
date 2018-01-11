import React from 'react';
import PropTypes from 'prop-types';
import MediaOptions from './MediaOptions'
import './styles/SearchForm.css';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchBoxText: '',
            mediaOption: 'music'
        };
    }

    handleSearchBoxChange = event => {
        this.setState({
            searchBoxText: event.target.value
        })
    };

    handleMediaOptionChange = event => {
        this.setState({
            mediaOption: event.target.value
        });
    }

    handleReset = event => {
        this.setState({
            searchBoxText: '',
            mediaOption: 'music'
        });

        this.props.onReset();
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.searchBoxText, this.state.mediaOption);
    }

    render() {
        return (
            <div className="submit-form container">
                <form className="form-group justify-content-center"
                      onSubmit={this.handleSubmit}
                      autoComplete="off">
                    <input type="search"
                           className="form-control"
                           name="searchBox"
                           placeholder="Enter an Artist"
                           onChange={this.handleSearchBoxChange}
                           autoFocus />
                    <MediaOptions checked={this.state.mediaOption}
                                  onChange={this.handleMediaOptionChange} />
                    <input type="submit"
                           className="btn btn-primary"
                           value="Search"
                           disabled={!this.state.searchBoxText } />
                    <input className="btn btn-danger"
                           type="reset"
                           value="Reset"
                           onClick={this.handleReset} />
                </form>
            </div>
        );
    }
}

SearchForm.propTypes = {
    onReset: PropTypes.func,
    onSubmit: PropTypes.func
};

export default SearchForm;
