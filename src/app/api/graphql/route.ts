import { readFileSync } from 'fs';
import { join } from 'path';

import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { Neo4jGraphQL } from '@neo4j/graphql';
import { createNeo4jDriver } from '@/utils/database/neo4j';
import gql from 'graphql-tag';

const driver = createNeo4jDriver();
const typeDefs = gql(
  readFileSync(join(process.cwd(), 'src/graphql/schema.graphql'), 'utf-8')
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });
const schema = await neoSchema.getSchema();
const server = new ApolloServer({
    schema
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async req => ({ req, driver }),
});

export { handler as GET, handler as POST };
