import React from 'react';
import Navbar from '~/src/components/common/navbar/containers/navbar';
import Footer from '~/src/components/common/footer/containers/footer';
import styles from './styles/appContainer.less';

class AppContainer extends React.Component {

	render() {
		return (
			<div className={styles.app}>
				<Navbar />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

AppContainer.propTypes = {
  children: React.PropTypes.any,
};

export default AppContainer;
