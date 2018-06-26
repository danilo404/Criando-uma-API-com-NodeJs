//nota_rotas.js
	module.exports = function (app, db) {
	app.post('/notes', (req, res) => {
    // Nossa Nota é criada aqui
    res.send('Nota Criada com Sucesso')
});
};