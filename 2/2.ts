await Deno.create("readme.txt");

// writing files  --allow-write
const encoder = new TextEncoder();
const text = "writing on file";
await Deno.writeFile("readme.txt", encoder.encode(text));

// reading files  --allow-read

const decoder = new TextDecoder("utf-8");

const data = await Deno.readFile("readme.txt");

console.log(decoder.decode(data));

//other method to read txt file

const txtData = await Deno.readTextFile("readme.txt");
console.log("2", txtData);

//renaming and removing files

await Deno.rename("readme.txt", "deleteme.txt");

await Deno.remove("deleteme.txt");
