import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {
	getIsResetPasswordLoading,
	getIsResponseSuccess,
	getResponseMessage,
} from 'src/js/components/pages/loginContainer/selectors/loginContainerSelectors';
import { getResetTokenParam } from 'src/js/components/appContainer/selectors/appContainerSelectors';
import { resetPassword } from 'src/js/components/pages/loginContainer/actions/loginContainerActions';
import ResetPasswordContainer from '../components/resetPasswordContainer';
import { showGlobalAlert } from 'src/js/components/globalAlert/actions';

function mapStateToProps(state) {
  	return {
  		isResetPasswordLoading: getIsResetPasswordLoading(state),
  		isResponseSuccess: getIsResponseSuccess(state),
  		responseMessage: getResponseMessage(state),
        resetToken: getResetTokenParam(state),
  	};
}

function mapDispatchToProps(dispatch, ownProps) {
  	return {
  		onSubmit({ password }, resetToken) {
  			dispatch(resetPassword({ password, resetToken }))
  		},
        onSubmitMessage(submitMsg) {
            dispatch(showGlobalAlert(submitMsg));
        }
  	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPasswordContainer));