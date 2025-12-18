import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [
    index("routes/home.tsx"),
    route("/services", "routes/Services.tsx"),
    route("/catalogo", "routes/Catalogo.tsx"),
    route("/blog", "routes/Blog.tsx"),
] satisfies RouteConfig;
