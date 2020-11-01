import { readJson, writeJson } from 'https://deno.land/std/fs/mod.ts';
import { v4 } from 'https://deno.land/std@0.76.0/uuid/mod.ts';

const uuid = v4.generate();
console.log(uuid);

const jsonObj = await readJson("jason.json");
console.log(jsonObj);

const books = [
  { title: "livre", note: 2 },
  { title: "livre2", note: 12 },
];

await writeJson("books.json", books, { spaces: 2 });
