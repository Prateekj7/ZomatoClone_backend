import * as koa from "koa";
import { Pool } from "pg";
import * as dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false //even if ssl fails let it run the code.
    }
});

const app = new koa();

app.use(async (ctx) => {
    await pool.connect();
    const result = await pool.query("select * from hotels_csv");
    ctx.response.body = result.rows;
})

app.listen(process.env.PORT || 3000, () => console.log("simple koa server is running in 3005"))