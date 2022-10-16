import { Application } from "https://deno.land/x/oak/mod.ts";
import wasteRoute from "./routes/waste-route.ts";


const app = new Application();


app.use(wasteRoute.routes())


console.log(`Listening on port:3000...`);
await app.listen({port:3000});