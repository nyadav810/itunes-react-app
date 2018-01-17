import { connect } from 'react-redux';
import { fetchContent } from '../actions';
import SearchForm from '../components/SearchForm';

const mapStateToProps = (state) => ({
    searchTerm: state.searchTerm,
    media: state.media
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (searchTerm, media) => {
        if (searchTerm) {
            dispatch(fetchContent(searchTerm, media));
        }
    }
});

const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

export default SearchFormContainer;
