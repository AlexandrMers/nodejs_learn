import express from 'express';

import {SigKillController} from "./sigController";
import {Loop} from "./loop";
import {fileModule} from "./fileModule";

const app = express();

// const signalsController = new SigKillController(process);
// const loop = new Loop();

fileModule(app);

// app.use(cookieParser());

// signals.forEach((element) => {
//     process.on(element, () => {
//         console.log('run');
//     });
// });

// killController.processExit();

//Run files module


// const handleAfterRunServer = () => {
//     loop.showDifferent();
//
//     signalsController.subscribeOnSignal(
//         "SIGINT",
//         () => {
//             console.log('SIGINT !!!');
//         }
//     );
//
//     setTimeout(() => {
//         process.exitCode = 22;
//         process.exit(0);
//     }, 4000);
// }

// setTimeout(() => {
//     signalsController.processExit(22);
// }, 3000);


// app.post('/kill-process', signalsController.killProcess);

// app.get('/get', (req, res) => {
//     return res.json({
//         status: "ok",
//         data: "this is a get request"
//     })
// });
//
// app.post('/post', (req, res) => {
//     return res.json({
//         status: "ok",
//         data: "this is a post request"
//     })
// });
//
//
//
//
// app.all('/get-and-post', (req, res) => {
//     if(req.method === 'GET') {
//         return res.json({
//             status: "ok",
//             data: "this is a get request"
//         })
//     }
//
//     if(req.method === 'POST') {
//         return res.json({
//             status: "ok",
//             data: "this is a post request"
//         })
//     }
//
//     return  res.json({
//         status: "ok",
//         data: "this is another request"
//     })
//
// });


// app.post('/set-header', (req, res) => {
//     res.setHeader('Content-Type', 'text/plain123123123')
//     res.json("ok");
// });
//
// app.get('/set-cookie', (req, res) => {
//     res.cookie("auth", true)
//     res.json("ok");
// });
//
// app.get('/read-all-cookies', (req, res) => {
//     console.log('cookies check -> ', req.cookies);
//     res.json("ok");
// });
//
// app.get('/redirect', (req, res) => {
//     res.redirect('/get')
//     res.json("ok");
// });
//
// app.get('/set-status', (req, res) => {
//     res.status(500).json("not ok")
// });

// const server = http.createServer((req, res) => {
//
//     if(req.method === 'GET' && req.url === '/get-env') {
//         console.log('node env -> ', process.env.NODE_ENV);
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'text/plain')
//         return res.end("")
//     }
//
//     if(req.method === 'GET' && req.url === '/get') {
//         const nodeEnv = process.env.NODE_ENV;
//         console.log('nodeEnv ', nodeEnv);
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'text/plain')
//         return res.end('this is a get request')
//     }
//
//     if(req.method === 'POST' && req.url === '/post') {
//         const envPost = 'post method'
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'text/plain')
//         return res.end('this is a post request')
//     }
//
//     if(req.method === 'POST' || req.method === 'GET' && req.url === '/env') {
//         const envPost = 'post method'
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'text/plain')
//         return res.end('post and get')
//     }
//
//     if(req.method === 'GET' && req.url === '/redirect') {
//         res.writeHead(301,
//             {Location: `http://${hostname}:${port}/get`}
//         );
//         res.end();
//     }
//
//     if(req.method === 'GET' && req.url === '/set-cookie') {
//         res.writeHead(201,{
//
//         });
//         res.end();
//     }
// });

const port = 3000;
const host = 'localhost';

app.listen(port,  host, () => {
    console.log(`listening on ${host}/${port}`);
})