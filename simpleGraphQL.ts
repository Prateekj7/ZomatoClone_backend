import { ApolloServer } from "apollo-server-koa";
import * as koa from "koa";
import * as Router from "koa-router";
import { buildSchema } from "type-graphql";
import HotelResolver from "./HotelResolver";
import * as  graphqlHTTP from "koa-graphql"
import "./createConnection";
import * as cors from "@koa/cors"

async function main(){
    const app = new koa();
    const schema = await buildSchema({resolvers: [HotelResolver]});

    const appoloServer = new ApolloServer({
        schema
    });

    const router = new Router();
    router.all("/graphql", graphqlHTTP({schema: schema}));

    appoloServer.applyMiddleware({app})

    app.use(cors());
    app.use(router.routes());

    app.listen(3005, () => console.log("simple graphql server is running"));


}

main();