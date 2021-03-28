import mock from '../utils/mook';

mock.onPost('/api/home/login').reply(200, {
    'id': 1,
    'username': 'Caroline',
    'email': 'carolmartins@carol.com.br'
});