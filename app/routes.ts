import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout('components/MainLayout.tsx', [
        index("routes/home.tsx"),
        route("about", "routes/about.tsx"),
        route('models', "routes/models.tsx"),
        route('model/:id', 'routes/model.tsx')
    ])
] satisfies RouteConfig;
