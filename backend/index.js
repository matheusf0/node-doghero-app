const express = require('express');

const app = express()

app.get('/', (request, response) => {
    return response.json({
        evento: 'teste',
        nome:  'teste'
    });
});
app.listen(3333);