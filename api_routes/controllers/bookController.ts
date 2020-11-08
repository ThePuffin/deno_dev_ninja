import { v4 } from 'https://deno.land/std@0.76.0/uuid/mod.ts';
import { Context, HandlerFunc } from 'https://deno.land/x/abc@v1.2.0/mod.ts';

import { Book } from '../models/bookModel.ts';

let books: Book[] = [
  {
    id: "1",
    title: "string",
    author: "string",
    pages: 100,
  },
  {
    id: "2",
    title: "string 2",
    author: "string 2",
    pages: 200,
  },
];

export const get_all_books = (ctx: Context) => {
  return ctx.json(books, 200);
};

export const get_book = (ctx: Context) => {
  const { id } = ctx.params;
  const book = books.find((b: Book) => b.id === id);
  if (book) {
    return ctx.json(book, 200);
  }
  return ctx.string("no book found with that id", 400);
};

export const create_book: HandlerFunc = async (ctx: Context) => {
  const { title, author, pages } = await ctx.body as Book;

  //validate data & type of the data
  const id = v4.generate();
  const book: Book = { id, title, author, pages };
  books = [...books, book];
  return ctx.json(book, 201);
};

export const delete_book = (ctx: Context) => {
  const { id } = ctx.params;
  const book = books.find((b: Book) => b.id === id);
  if (book) {
    books = books.filter((b: Book) => b.id !== id);
    return ctx.json(book, 200);
  }
  return ctx.string("no book found with that id", 404);
};
