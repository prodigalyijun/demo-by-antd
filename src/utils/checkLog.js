import { hashHistory } from 'react-router';

function checkLog() {
    var at = sessionStorage.getItem('access_token') || '';
    if (!at) {
        hashHistory.push('/login');
        return Promise.reject('Unauthorized.');
    }
}

export default checkLog;