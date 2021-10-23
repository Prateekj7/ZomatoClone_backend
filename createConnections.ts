import { ConnectionOptions, createConnection } from "typeorm";
import { Hotels_Csv } from "./hotels_csv";
import * as dotenv from "dotenv";

dotenv.config();

createConnection(<ConnectionOptions>{
    url: process.env.DATABASE_URL,
    entities: [Hotels_Csv],
    type: "postgres",
    extra: {
        ssl: {
            rejectUnauthorized: false //even if ssl fails let it run the code.
        }
    }
});