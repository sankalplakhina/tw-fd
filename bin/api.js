require('./../server.babel'); // babel registration (runtime transpilation for node)
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');

const { apiPort } = require('../config/env');

const app = express();

app.use(morgan('dev', {}));
app.use(compression());
app.use(bodyParser.json());

app.get('/api/home', (req, res) => {
	res.json({
		status: '200',
		data: {
			message: 'Home',
		}
	});
});

app.get('/api/explore', (req, res) => {
	res.json({
		data: {
			rows: ['quickInfo', 'avgStats', 'statsPanels'],
			quickInfo: {
				cols: ['newOrders', 'riskyOrders'],
				newOrders: {title: 'New Orders', count: 30},
				riskyOrders: {title: 'Risky Orders', count: 30, risky: true},
			},
			avgStats: {
				cols: ['stats', 'matchedOrders', 'scoreDistribution'],
				stats: {
					title : 'STATS',
					type: 'table',
					rows: [
						{ type: 'tableRow', text: 'Average Score', icon: 'score.png', count:  84},
						{ type: 'tableRow', text: 'Average Order Amount', count:  12421.43},
					]
				},
				matchedOrders: {
					title: 'Matched Orders',
					type: 'table',
					rows: [
						{ type: 'tableRow', text: 'Total', count:  472},
						{ type: 'tableRow', text: 'Bad', count:  '12%', risky: true},
						{ type: 'tableRow', text: 'Not Bad', count:  '92%', safe: true},
						{ type: 'tableRow', text: 'Unlabled', count:  '0%', safe: true},
					]
				},
				scoreDistribution: {
					title: 'Score distribution',
					type: 'chart',
					rows: [
						{
							type: 'pieChart',
							data: [
								{name: 'Safe Orders', value: 475},
								{name: 'Risky Orders', value: 25},
							],
							colors: [
								'#29b6f6',
								'#d0011b',
							],
							centerText: ['25/500', 'Risky Orders']
						},
					]
				}
			},
			statsPanels: {
				rows: ['graphControls', 'panelData'],
				graphControls: {

				},
				panelData: {
					rows: ['row07SND73H', 'row08SND73H'],
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
					row07SND73H: {
						score: {
							icon: 'score.png',
							count:  84,
						},
						order: {
							title: '07SND73H',
							risky: true,
							paras: ['cockatrice8414', 'Dec 3, 2016 1:10 PM (3 days ago)'],
						},
						isExpanded: true,
						_collapsedData: {
							cols: ['left', 'right'],
							left: {
								rows: ['orders', 'payment', 'billingShipping', 'itemOrdered'],
								widthSize: 8,
								orders: {
									type: 'table',
									widthSize: 12,
									heading: {
										class: 'order',
										icon: 'orders.png',
										title: 'Orders'
									},
									columns: [
										{ key: 'orderId', label: 'Order ID' },
										{ key: 'amount', label: 'Amount' },
										{ key: 'date', label: 'Date' },
										{ key: 'payment', label: 'Payment' },
										{ key: 'status', label: 'Status' },
										{ key: 'attempts', label: 'Attempts' },
									],
									rows: [
										{ orderId: '7834h48', amount: '$843', date: 'Dec8, 2016 21:35', payment: 'Credit Card', status: 'Success', attempts: '3' },
										{ orderId: '7834h48', amount: '$843', date: 'Dec8, 2016 21:35', payment: 'Debit Card', status: 'Success', attempts: '3' },
									],
								},
								payment: {
									type: 'table',
									widthSize: 12,
									heading: {
										class: 'payment',
										icon: 'payment.png',
										title: 'Payment'
									},
									columns: [
										{ key: 'status', label: 'Status' },
										{ key: 'txnType', label: 'TXN Type' },
										{ key: 'amount', label: 'Amount' },
										{ key: 'date', label: 'Date' },
										{ key: 'payment', label: 'Payment' },
										{ key: 'gateway', label: 'Gateway' },
										{ key: 'avsCvv', label: 'AVS/CVV' },
										{ key: 'last4', label: 'Last 4' },
									],
									rows: [
										{ status: 'Success', txnType: 'Sale', amount: '$843', date: 'Dec8, 2016 21:35', payment: 'Credit Card', gateway: 'Stripe', avsCvv: 'TODO', last4: 'Last 4' },
									],
								},
								billingShipping: {
									type: 'map',
									widthSize: 6,
									heading: {
										class: 'billShopping',
										icon: 'billingShipping.png',
										title: 'Billing and Shipping'
									},
								},
								itemOrdered: {
									type: 'table',
									widthSize: 6,
									heading: {
										class: 'itemOrdered',
										icon: 'orders.png',
										title: 'Item Ordered'
									},
									columns: [
										{ key: 'item', label: 'Item' },
										{ key: 'quantity', label: 'Quantity' },
										{ key: 'price', label: 'Price' },
									],
									rows: [
										{ item: 'Iphone 6', quantity: '33', price: '$1043'},
										{ item: 'Iphone 6s', quantity: '13', price: '$1243'},
										{ item: 'Iphone 6s', quantity: '13', price: '$1243'},
										{ item: 'MI5', quantity: '45', price: '$698'},
										{ item: 'One Plus 3', quantity: '8', price: '$843'},
										{ item: 'One Plus 3', quantity: '8', price: '$843'},
									],
								}
							},
							right: {
								widthSize: 4,
								rows: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'],
								item1: {
									type: 'item',
									icon: 'statusReliable.png',
									text: 'Account age',
									postText: 'Gurgaon Is Safe Zone : Yes',
								},
								item2: {
									type: 'item',
									icon: 'statusReliable.png',
									text: 'Account age',
									postText: '1 year : Reliable',
								},
								item3: {
									type: 'item',
									icon: 'statusTooFast.png',
									text: 'Time to order',
									postText: '5 min : Too fast, abnormal',
								},
								item4: {
									type: 'item',
									icon: 'statusNone.png',
									text: 'IP Address location',
									postText: 'Delhi : None',
								},
								item5: {
									type: 'item',
									icon: 'statusReliable.png',
									text: 'Device Cost',
									postText: 'Rs 25K : Healthy',
								},
								item6: {
									type: 'item',
									icon: 'statusTooFast.png',
									text: 'Email address provider',
									postText: 'gmail/ht.com : Reliable',
								},
							}
						}
					},
					row08SND73H: {
						score: {
							icon: 'score.png',
							count:  85,
						},
						order: {
							title: '08SND73H',
							risky: true,
							paras: ['cockatrice8514', 'Dec 4, 2016 1:10 PM (3 days ago)']
						},
						_collapsedData: {
							cols: ['left', 'right'],
							left: {
								rows: ['orders', 'payment', 'billingShipping', 'itemOrdered'],
								widthSize: 8,
								orders: {
									type: 'table',
									widthSize: 12,
									heading: {
										class: 'order',
										icon: 'orders.png',
										title: 'Orders'
									},
									columns: [
										{ key: 'orderId', label: 'Order ID' },
										{ key: 'amount', label: 'Amount' },
										{ key: 'date', label: 'Date' },
										{ key: 'payment', label: 'Payment' },
										{ key: 'status', label: 'Status' },
										{ key: 'attempts', label: 'Attempts' },
									],
									rows: [
										{ orderId: '7834h48', amount: '$843', date: 'Dec8, 2016 21:35', payment: 'Credit Card', status: 'Success', attempts: '3' }
									],
								},
								payment: {
									type: 'table',
									widthSize: 12,
									heading: {
										class: 'payment',
										icon: 'payment.png',
										title: 'Payment'
									},
									columns: [
										{ key: 'status', label: 'Status' },
										{ key: 'txnType', label: 'TXN Type' },
										{ key: 'amount', label: 'Amount' },
										{ key: 'date', label: 'Date' },
										{ key: 'payment', label: 'Payment' },
										{ key: 'gateway', label: 'Gateway' },
										{ key: 'avsCvv', label: 'AVS/CVV' },
										{ key: 'last4', label: 'Last 4' },
									],
									rows: [
										{ status: 'Success', txnType: 'Sale', amount: '$843', date: 'Dec8, 2016 21:35', payment: 'Credit Card', gateway: 'Stripe', avsCvv: 'TODO', last4: 'Last 4' },
									],
								},
								billingShipping: {
									type: 'map',
									widthSize: 6,
									heading: {
										class: 'billingShipping',
										icon: 'billingShipping.png',
										title: 'Billing and Shipping'
									},
								},
								itemOrdered: {
									type: 'table',
									widthSize: 6,
									heading: {
										class: 'itemOrdered',
										icon: 'orders.png',
										title: 'Item Ordered'
									},
									columns: [
										{ key: 'item', label: 'Item' },
										{ key: 'quantity', label: 'Quantity' },
										{ key: 'price', label: 'Price' },
									],
									rows: [
										{ item: 'Iphone 6', quantity: '33', price: '$1043'},
										{ item: 'Iphone 6s', quantity: '13', price: '$1243'},
										{ item: 'Iphone 6s', quantity: '13', price: '$1243'},
										{ item: 'MI5', quantity: '45', price: '$698'},
										{ item: 'One Plus 3', quantity: '8', price: '$843'},
										{ item: 'One Plus 3', quantity: '8', price: '$843'},
									],
								}
							},
							right: {
								widthSize: 4,
								rows: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'],
								item1: {
									type: 'item',
									icon: 'statusReliable.png',
									text: 'Account age',
									postText: 'Gurgaon Is Safe Zone : Yes',
								},
								item2: {
									type: 'item',
									icon: 'statusReliable.png',
									text: 'Account age',
									postText: '1 year : Reliable',
								},
								item3: {
									type: 'item',
									icon: 'statusTooFast.png',
									text: 'Time to order',
									postText: '5 min : Too fast, abnormal',
								},
								item4: {
									type: 'item',
									icon: 'statusNone.png',
									text: 'IP Address location',
									postText: 'Delhi : None',
								},
								item5: {
									type: 'item',
									icon: 'statusReliable.png',
									text: 'Device Cost',
									postText: 'Rs 25K : Healthy',
								},
								item6: {
									type: 'item',
									icon: 'statusTooFast.png',
									text: 'Email address provider',
									postText: 'gmail/ht.com : Reliable',
								},
							}
						}
					}
				}

			}
		}
	});
});

app.get('/api/review', (req, res) => {
	res.json({
		data: {
			message: 'Review API',
		}
	});
});

app.get('/api/analyze', (req, res) => {
	res.json({
		data: {
			rows: ['info', 'pieGraphs'],
			info: {
				heading: 'Score Threshold Tool',
				paras: [
					'Below is a graph of the number of Create Orders from users labeled "bad" in red and total Create Orders in blue. Click and drag the score bubble to explore your data.',
				],
			},
			pieGraphs: {
				cols: [
					{
						type: 'pieChart',
						title: 'Accept',
						data: [
							{name: 'All Orders', value: 29.52},
							{name: 'Accept Orders', value: 70.48},
						],
						colors: [
							'#fde3e6',
							'#ffb1bc',
						],
						centerText: ['70.48%', '(0% of all bad labels)']
					},
					{
						type: 'pieChart',
						title: 'Risky',
						data: [
							{name: 'All Orders', value: 49.36},
							{name: 'Risky Orders', value: 56.64},
						],
						colors: [
							'#fde3e6',
							'#ffb1bc',
						],
						centerText: ['56.64%', '(0% of all bad labels)']
					},
					{
						type: 'pieChart',
						title: 'Reject',
						data: [
							{name: 'All Orders', value: 53.48},
							{name: 'Reject Orders', value: 46.52},
						],
						colors: [
							'#fde3e6',
							'#ffb1bc',
						],
						centerText: ['46.52%', '(0% of all bad labels)']
					},
				]
			}
		}
	});
});

app.get('/api', (req, res) => {
	res.json({message: 'Welcome to the API!'});
});

app.listen(apiPort, (err) => {
	if (err) {
		console.error(err);
	} else {
		console.info(`API is up on port ${apiPort}`);
	}
});
