import { connect } from 'react-redux';
//import { setSearchResults } from '../actions';
import SearchForm from '../components/SearchForm';

const mapStateToProps = (state) => ({
    searchTerm: state.searchTerm,
    media: state.media
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: () => {
        //dispatch();
    }
});

const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

export default SearchFormContainer;
