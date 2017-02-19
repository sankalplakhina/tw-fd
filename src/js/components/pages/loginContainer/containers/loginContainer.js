import { connect } from 'react-redux';
import { withRouter } from 'react-router'
// import { load } from '../actions/analyzeContainerActions';
// import { analyzeDataLoaded } from '../selectors/analyzeContainerSelectors';
import LoginContainer from '../components/loginContainer';

// const asyncProps = {
//     promise: ({ store: { dispatch, getState } }) => {
//     	const state = getState();
//     	if (!analyzeDataLoaded(state)) {
//     		return dispatch(load());
//     	}
//     	return null;
//     }
// };

function mapStateToProps(state, ownProps) {
  	return {
  		onLoginSuccess() {
  			ownProps.router.replace('/explore');
  		}
  	};
}

function mapDispatchToProps(dispatch) {
  	return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));