import { Router } from "https://deno.land/x/oak/mod.ts";

const wasteRoute = new Router();

wasteRoute.get('/', ({response})=> {
    response.body = 'homepage'
    response.status = 200;
})

wasteRoute.get('/trash', ({response})=> {
    response.body = 'trash'
    response.status = 200;
})

export default wasteRoute