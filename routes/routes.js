const http = require('http');
const paths = require('./api/paths.json');

async function routes (fastify, options) {

    // GET APIs /api/paths
    fastify.get('/api/paths', async (req, res) => {
        return res.send(paths);
    });

    // GET APIs /api/paths/:path
    fastify.get('/api/paths/:path', async (req, res) => {
        let data;
        for(let i=0;i<paths.length;i++){
          if(paths[i].urlname = req.params.path){
            data = paths[i];
            break;
          }
        }
        return res.send(data);
    });

    // API for redirect
    fastify.get("/redirect/:path",async (req,res)=>{
        let data;
        for(let i=0;i<paths.length;i++){
          if(paths[i].urlname = req.params.path){
            data = paths[i];
            break;
          }
        }
        res.redirect(data.redirect);
    })

    // GET /:paths
    fastify.get('/', async (req, res) => {
        res.send(
            "To See All paths Just Go To URL\n"+
            "http://localhost:3000/api/paths\n\n"+
            "To See Single Path Detail Just Go To URL\n"+
            "http://localhost:3000/api/paths/yourUrlnameParameter\n"
        );
    });

    fastify.get('/g', async (req, res) => {
        res.redirect("/redirect" + req.url);
    });

};

module.exports = routes;