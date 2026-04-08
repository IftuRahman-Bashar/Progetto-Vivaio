const http = require('http');
const fs = require("fs");
const PORT = 5501;

const server = http.createServer((req, res) => {
    console.log("Richiesta ricevuta: " + req.url);
    if (req.method === "GET") {
        if (req.url === "/elencoBonsaiA") {
            fs.readFile("Dati pagina 3\db.json", function (error, data) {
                if (error){
                    res.writeHead(400);
                    res.write("Errore");
                    res.end();
                }
                else {
                    res.writeHead(200, {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT',
                        'Access-Control-Allow-Headers': 'Content-Type'
                    });
                    console.log(JSON.stringify(JSON.parse(data).bonsaiA));
                    res.write(JSON.stringify(JSON.parse(data).bonsaiA));
                    res.end();
                }
            });
        }

        else if (req.url === "/elencoBonsaiB") {
            fs.readFile("Dati pagina 3\db.json", function (error, data) {
                if (error){
                    res.writeHead(400);
                    res.write("Errore");
                    res.end();
                }
                else {
                    res.writeHead(200, {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT',
                        'Access-Control-Allow-Headers': 'Content-Type'
                    });
                    console.log(JSON.stringify(JSON.parse(data).bonsaiB));
                    res.write(JSON.stringify(JSON.parse(data).bonsaiB));
                    res.end();
                }
            });
        }

        else if (res.url.IndexOf("/img/") === -1) {
            fs.readFile("Dati pagina 3\img" {
            
        
