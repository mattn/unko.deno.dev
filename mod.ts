import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";
import indexPage from "./pages/index.jsx";

serve({
  "/": indexPage,
  404: () => new Response("ありまへん", {headers: {"content-type": "text/html; charset=utf-8"}}),
});
