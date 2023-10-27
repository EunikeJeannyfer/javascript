const isPasswordCorrect = (password) => {
	return new Promise((res, rej) => {
		console.log('Password', password);
		if (password !== '123456') 
            return rej('Wrong password!');

		return res(true);
	});
};

const login = () => {
	return new Promise((res) => res('Logged In'));
};

isPasswordCorrect('123456')
	.then((res) => res && login().then((res)=> console.log(res)))
	.catch((err) => console.error(err));

isPasswordCorrect('123455')
	.then((res) => res && login())
	.catch((err) => console.error(err));