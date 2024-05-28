
import { promises as fs } from 'fs';
import fetch from 'node-fetch';

const suffix = process.argv[2];

const fullDate = new Date().toISOString();
const fileName = `./prices/prices-${suffix}/prices-${suffix}-${fullDate}.json`;

const yahooTickers = [
	'SMT.L',
	'SONG.L'
];

const urlTemplate = 'https://query1.finance.yahoo.com/v8/finance/chart/{stockSymbol}?region=GB&lang=en-GB&includePrePost=false&interval=2m&useYfid=true&range=1d&corsDomain=uk.finance.yahoo.com&.tsrc=finance';

const prices = [];

for (const stockSymbol of yahooTickers) {
	const url = urlTemplate.replace('{stockSymbol}', stockSymbol);

	let regularMarketPrice, currency;
	try {
		const res = await fetch(url);
		const body = await res.json();
		regularMarketPrice = body.chart.result[0].meta.regularMarketPrice;
		currency = body.chart.result[0].meta.currency;
	}
	catch {
		regularMarketPrice = 'ERROR';
		currency = 'ERROR';
	}

	const date = new Date().toISOString().substring(0, 10);

	const price = {
		date: date,
		stockSymbol: stockSymbol,
		price: regularMarketPrice,
        currency: currency
	}

	prices.push(price);
}

const json = JSON.stringify(prices, null, 2);
fs.appendFile(fileName, json);
console.log(json);
