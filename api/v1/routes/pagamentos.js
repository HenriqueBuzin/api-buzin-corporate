module.exports = function(app){

    app.get('/', function(req, res){

        console.log('Rota: Raíz (/)');

        res.send('Rota: Raíz (/)');

    });

	app.get('/api/v1/pagamentos', function(req, res){

		console.log('Rota: Pagamentos');

		res.send('Rota: Pagamentos');

	});

	app.post('/api/v1/pagamentos/pagamento', function(req, res){

		var pagamento = res.body;

        console.log('Rota: Pagamentos/Pagamento');

		res.send('Rota: Pagamentos/Pagamento');

	});

}