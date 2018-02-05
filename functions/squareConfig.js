const SquareConnect = require('square-connect');
const defaultClient = SquareConnect.ApiClient.instance;
import { development } from './secrets';

const { name, token, applicationId, apiClientSet } = development;

const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = token;

const api = new SquareConnect.LocationsApi();

api.listLocations().then(
	data => {
		console.log('API called successfully. Returned data:', data);
	},
	error => {
		console.error(error);
	}
);
