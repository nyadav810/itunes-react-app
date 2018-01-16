import { connect } from 'react-redux';
import { setMedia } from '../actions';
import RadioButton from '../components/RadioButton';

const mapStateToProps = (state, ownProps) => ({
    label: ownProps.label,
    value: ownProps.value,
    media: state.media
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: () => {
        dispatch(setMedia(ownProps.value));
    }
});

const RadioButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioButton);

export default RadioButtonContainer;
