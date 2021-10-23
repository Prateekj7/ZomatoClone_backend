import { ConnectionOptions, createConnection } from "typeorm";
import { hotels_csv } from "./hotels_csv";
import * as dotenv from "dotenv";

dotenv.config();

createConnection(<ConnectionOptions>{
    url: process.env.DATABASE_URL,
    entities: [hotels_csv],
    type: "postgres",
    extra: {
        ssl: {
            rejectUnauthorized: false //even if ssl fails let it run the code.
        }
    }
});