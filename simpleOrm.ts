import * as koa from "koa";
import "./createConnections";
import { Hotels_Csv } from  "./hotels_csv"
import * as dotenv from "dotenv";

dotenv.config();

const app = new koa();

app.use(async (ctx) => {
    const result = await Hotels_Csv.find();
    ctx.response.body = result;
})

app.listen(process.env.PORT || 3000, () => console.log("simple koa server is running in 3005"))


