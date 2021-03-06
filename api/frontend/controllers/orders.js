import _ from 'lodash';
import proxyFetch from '../core/proxyFetch';
import getOrderData from '../core/getOrderData';

function processResponse(req, res, data) {
	const rowsData = {}
	const rows = _.map(data.values, (value) => {
		const id = value.order_id;
		rowsData[id] = getOrderData(value);
		return id;
	});
	res.json(
		_.defaults({
			rows,
			panelTitle: {
				cols: ['score', 'order', 'lastPaymentAbuseStatus'],
				score: {
					title : 'SCORE',
				},
				order: {
					title: 'ORDER',
				},
				lastPaymentAbuseStatus: {
					title: 'LAST PAYMENT ABUSE STATUS',
				},
			},
			next: data.next || null,
		}, rowsData)
	);
}

export default (req, res) => proxyFetch(req, res, processResponse);