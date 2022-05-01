import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      name: String!
      username: String
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'asdf-4312',
          name: 'Isabela Cerqueira',
          username: 'isalinda',
        };
      },
      users: () => {
        return [
          {
            id: 'asdf-4312',
            name: 'Isabela Cerqueira',
            username: 'isalinda',
          },
          {
            id: 'rtys-5678',
            name: 'Marcos Cerqueira',
            username: 'mcerqs',
          },
          {
            id: 'daqw-0934',
            name: 'Isla Cerqueira',
          },
          {
            id: 'oier-1290',
            name: 'Noah Cerqueira',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
