import { ConnectionOptions, createConnection } from "typeorm";
import { Hotels_Csv } from "./hotels_csv";

createConnection(<ConnectionOptions>{
    url: process.env.DATABASE_URL,
    entities: [Hotels_Csv],
    type: "postgres"
});