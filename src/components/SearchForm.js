import React from 'react';
import PropTypes from 'prop-types';
import './styles/SearchForm.css';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchBoxText: ''
        };
    }

    handleSearchBoxChange = event => {
        this.setState({
            searchBoxText: event.target.value
        })
    };

    handleReset = event => {
        this.setState({
            searchBoxText: ''
        });

        this.props.onReset();
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.searchBoxText);
    }

    render() {
        return (
            <div className="submit-form container">
                <form className="form-group justify-content-center"
                      onSubmit={this.handleSubmit} >
                    <input type="search"
                           className="form-control"
                           name="searchBox"
                           placeholder="Enter an Artist"
                           onChange={this.handleSearchBoxChange}
                           autoFocus />
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
