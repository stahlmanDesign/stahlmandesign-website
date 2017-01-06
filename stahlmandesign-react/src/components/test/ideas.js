import Login from '../Login.js';

it('should log in user in valid session', () => {
    const div = document.createElement('div');
    request(Login)
	.send({"email": "demo@jitbase.com", "password": "demo"});
    ReactDOM.render(<Login message={"The user is connected"} />, div);
});
