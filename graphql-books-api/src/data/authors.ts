// src/data/authors.ts
export interface Author {
  id: string;
  name: string;
}

export const authors: Author[] = [
  { id: "1", name: "J.K Rowling" },
  { id: "2", name: "George R.R. Martin" },
];
