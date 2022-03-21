const express = require('express');
const https = require('https')
const app = express();
const port = process.env.PORT || 5000;
const path = __dirname + '/app/views/';

app.use(express.static(path));

app.get('/', (req, res) => {
    res.sendFile(path + "index.html");
});

app.get('/api/search', async (req, res) => {
    const input = req.query;
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'seqwa-api-key': '87b622a4a8829636149d4c90d748274b2287b022', // Replace with your API Key
        },
    };
    const params = {
        index: 'cde1d8e5-f0af-4498-801d-3ff82acec9c6', // Replace with your Index Id
        query: input.query,
        highlightField: 'title', // Include the field that needs to be highlighted for the suggestions. It is optional. By not setting this field you may end up with results from any field.
        fields: ['title', 'price', 'image', 'link'],
        context: input.context,
        type: input.type,
        maxResults: 200,
    };

    https.get(
        'https://www.seqwa.com/api/v1/search?' + new URLSearchParams(params),
        options,
        (result) => {
            let data = '';
            result.on('data', chunk => {
                data += chunk;
            });
            result.on('end', () => {
                data = JSON.parse(data);
                res.status(200).json(data)
            })
        }
    ).end();
});



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
