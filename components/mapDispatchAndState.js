import { bindActionCreators } from 'redux';
import * as actions from './actions/actions.js'

export function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
