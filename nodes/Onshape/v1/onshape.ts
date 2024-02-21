import * as CryptoJS from 'crypto-js';
import { URL, URLSearchParams } from 'url';

// creates random 25-character string
function buildNonce() {
	const chars = [
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
		'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0',
		'1', '2', '3', '4', '5', '6', '7', '8', '9'
	];
	let nonce = '';
	for (let i = 0; i < 25; i++) {
		nonce += chars[Math.floor(Math.random() * chars.length)];
	}
	return nonce;
}

export function buildHeaders(method: any, url: any, headers: any, query: any, accessKey: any, secretKey: any) {
	const urlObj: URL = new URL(url);
	const path = urlObj.pathname;

	const queryString = new URLSearchParams(query as any).toString()

	const authDate = (new Date()).toUTCString();
	const onNonce = buildNonce();

	if (!headers.hasOwnProperty('content-type'))
		Object.assign(headers, { 'content-type': 'application/json' });

	const hmacString = (method + '\n' + onNonce + '\n' + authDate + '\n' +
		headers['content-type'] + '\n' + path + '\n' + queryString + '\n').toLowerCase();
	const signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(hmacString, secretKey));

	const asign = 'On ' + accessKey + ':HmacSHA256:' + signature;

	Object.assign(headers, { 'On-Nonce': onNonce });
	Object.assign(headers, { 'Date': authDate });
	Object.assign(headers, { 'Authorization': asign });
	if (!headers.hasOwnProperty('Accept'))
		Object.assign(headers, { 'Accept': 'application/vnd.onshape.v1+json;charset=UTF-8;qs=0.1' });

	return headers;
};
