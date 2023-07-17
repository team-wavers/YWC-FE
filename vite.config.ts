import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    return defineConfig({
        plugins: [
            react(),
            viteTsconfigPaths(),
            svgrPlugin(),
            sentryVitePlugin({
                authToken: process.env.SENTRY_AUTH_TOKEN,
                org: "team-culfare",
                project: "javascript-react",
            }),
        ],
        server: {
            port: Number(process.env.VITE_PORT),
        },
        build: {
            minify: "terser",
            sourcemap: true,
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                },
            },
        },
    });
};
