import { connect } from 'react-redux';
import ResultList from '../components/ResultList';

const mapStateToProps = (state) => ({
    searchTerm: state.searchTerm,
    media: state.media,
    content: state.content
});

const mapDispatchToProps = (dispatch) => ({

});

const VisibleResultList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultList);

export default VisibleResultList;
