import * as koa from "koa";
import "./createConnection";

import {hotels_csv} from "./hotels_csv";


const app = new koa();

app.use(async (ctx) => {
    const result = await hotels_csv.find();
    ctx.response.body = result;
})

app.listen(process.env.PORT, () => console.log("simple koa server is running at port 3005"))