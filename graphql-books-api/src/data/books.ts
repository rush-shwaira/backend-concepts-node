// src/data/books.ts
export interface Book {
  id: string;
  title: string;
  authorId: string;
}

export const books: Book[] = [
  { id: "1", title: "Harry Potter", authorId: "1" },
  { id: "2", title: "Game of Thrones", authorId: "2" },
];
