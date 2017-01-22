import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

class Footer extends React.Component {
  render() {
    return (
    	<div className="footer">
    	    <div className="pull-left">
    	        <a href="http://www.thirdwatch.ai/" target="_blank">Our products</a>
    	        <a href="http://www.thirdwatch.ai/" target="_blank">Resources</a>
    	        <a href="http://api.thirdwatch.ai/" target="_blank">Docs</a>
    	        <a href="http://www.thirdwatch.ai/" target="_blank">Pricing</a>
    	        <a href="mailto:hello@thirdwatch.ai" target="_blank">Support</a>
    	    </div>
    	    <div className="pull-right">&copy; ThirdWatch Pvt. Ltd. 2016 All Rights Reserved</div>
    	</div>
    );
  }
}

export default Footer;