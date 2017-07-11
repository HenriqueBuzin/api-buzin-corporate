module.exports = function(app){

    app.get('/', function(req, res){

        console.log('Rota: Raíz (/)');

        res.send('Rota: Raíz (/)');

    });

	app.get('/pagamentos', function(req, res){

		console.log('Rota: Pagamentos');

		res.send('Rota: Pagamentos');

	});

	app.post('/pagamentos/pagamento', function(req, res){

		var pagamento = req.body;

        console.log('Rota: Pagamentos/Pagamento');

        pagamento.forma = 'Cartão de Crédito';

		res.send(pagamento);

	});

}