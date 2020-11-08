import { Application, Context } from 'https://deno.land/x/abc@v1.2.0/mod.ts';

const app = new Application();

//routes
app.get("/", async (ctx: Context) => {
  await ctx.file("./public/index.html");
});

//listen to port
app.start({ port: 3000 });
