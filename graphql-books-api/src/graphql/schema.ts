// src/graphql/schema.ts

export const typeDefs = `#graphql
    type Author{
        id:ID!
        name:String!
        books:[Book!]!
    }

    type Book {
        id: ID!
        title: String!
        author: Author!
    }

    type Query {
        books: [Book!]!
        book(id: ID!): Book

        authors: [Author!]!
        author(id: ID!): Author
    }

    type Mutation{
        createAuthor(name: String!): Author!
        createBook(title: String!, authorId: ID!): Book!
    }
`;
