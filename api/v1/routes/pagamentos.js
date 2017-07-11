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

		var pagamento = res.body;

        console.log('Rota: Pagamentos/Pagamento');

		res.send('Rota: Pagamentos/Pagamento');

	});

}