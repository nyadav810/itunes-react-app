import { SET_MEDIA } from '../actions';

const media = (state = 'music', action) => {
    switch (action.type) {
        case SET_MEDIA:
            return action.media;
        default:
            return state;
    }
};

export default media;
