import * as koa from "koa";
import * as Router from "koa-router";

const app = new koa();
const router = new Router();

// Below is generc fucntion soo next is needed. SO it is generic to all funxtions
app.use((ctx,next) => {
    ctx.response.body = "koa server";
    next();
})

router.get("/a", (ctx) => {
    ctx.response.body += " a url has been invoked";
})

router.get("/b", (ctx) => {
    ctx.response.body += " b url has been invoked";
})

app.use(router.routes());

app.listen(3005, () => console.log("simple koa server is running in 3005"))