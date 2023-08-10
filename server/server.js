import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';
import dotenv from 'dotenv';
dotenv.config();



const Mongo = process.env.MONGO_CREDENTIALS


const server = new ApolloServer({
    typeDefs,
    resolvers,
});


mongoose.connect(Mongo, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected")
        return startStandaloneServer(server, {
                listen: { port: 4000 },
                // context: context
              });
    })
    .then((res) => console.log(res.url))
    .catch(err => console.log(err));
