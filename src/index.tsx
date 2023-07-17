import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN_KEY,
    environment: import.meta.env.VITE_SENTRY_ENV || "development",
    integrations: [
        new Sentry.BrowserTracing({
            // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
            tracePropagationTargets: [
                "localhost",
                "https://youthwelfare.kr",
                "https://ywc.dev.youthwelfare.kr",
            ],
        }),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(<Router />);
