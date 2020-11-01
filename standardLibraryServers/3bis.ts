import { serve } from 'https://deno.land/std/http/server.ts';

// add --allow-net to command deno run
const server = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of server) {
  const url = req.url;
  console.log(`request made on ${url}`);

  req.respond({ body: `Hello ninjas\n you visited ${url}` });
}
