import * as express from "express";

const app = express();

const router = express.Router();

router.get("/a", (request,response) => {
    response.send(' a url has been invoked')
})

app.use(router);

app.listen(3005, () => console.log("server is running in 3005"));