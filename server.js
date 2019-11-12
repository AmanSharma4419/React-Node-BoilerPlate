const express = require('express');
const app = express();
const port = 5000;
app.get('/api/customers', (req, res) => {
	const customers = [
		{ id: 1, name: 'Aman', lastname: 'Sharma' },
	];
	res.json(customers);
});
app.listen(port, () => console.log(`server is Started${port}`));
