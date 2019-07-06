import { ApolloServer } from "apollo-server";

import { environment } from "./environment";
import { resolvers } from "./resolvers";
import typeDefs from "./schema";

const server = new ApolloServer({ resolvers, typeDefs });

server
  .listen(environment.port)
  .then(({ url }) => console.log(`Server ready at ${url}. `));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}
