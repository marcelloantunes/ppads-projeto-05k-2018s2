let app = require('./config/server')

let = rotaHome = require('./app/routes/home')(app);

app.listen(4000, function() {
    console.log('Servidor ON - 4000');
});