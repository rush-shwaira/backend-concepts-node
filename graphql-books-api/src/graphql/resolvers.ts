// src/graphql/resolvers.ts
import { authors, type Author } from "../data/authors.js";
import { books, type Book } from "../data/books.js";

// Include actual logic
export const resolvers = {
  Query: {
    books: () => books,
    book: (_: any, args: { id: string }) => books.find((b) => b.id === args.id),
    authors: () => authors,
    author: (_: any, args: { id: string }) =>
      authors.find((a) => a.id === args.id),
  },
  Book: {
    author: (parent: Book) => authors.find((a) => a.id === parent.authorId),
  },
  Author: {
    books: (parent: Author) => books.filter((b) => b.authorId === parent.id),
  },
  Mutation: {
    createAuthor: (_: any, args: { name: string }) => {
      const newAuthor: Author = {
        id: String(authors.length + 1),
        name: args.name,
      };
      authors.push(newAuthor);
      return newAuthor;
    },
    createBook: (_: any, args: { title: string; authorId: string }) => {
      const newBook: Book = {
        id: String(books.length + 1),
        title: args.title,
        authorId: args.authorId,
      };
      books.push(newBook);
      return newBook;
    },
  },
};
