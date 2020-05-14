const express = require('express');
const next = require('next');
const mysql = require('mysql');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Federer5",
    database: "Jeopardy",
    multipleStatements: true
});

app
    .prepare()
    .then(() => {
        const server = express();

        server.get('/table', (req, res) => {
            con.connect(function (err) {
                if (err) throw err;
                console.log("Connected");
                con.query("SELECT * FROM categories WHERE themes_id = 1; " +
                    "SELECT id, title FROM questions WHERE categories_id < 7 ORDER BY value, categories_id; " +
                    "SELECT questions_id, title FROM answers WHERE questions_id <= 30",
                    function (err, result) {
                    if (err) {
                        throw err;
                    }
                    else {
                        return app.render(req, res, '/table', { categories: result[0], questions: result[1],
                                            answers: result[2]})
                    }
                });
            });
        });

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(port, err => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`)
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });