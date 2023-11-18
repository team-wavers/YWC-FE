import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pathType } from "@_types/path";
import Main from "@pages/Main"; // 추후에 수정
import NotFound from "@pages/NotFound";
import Map from "@pages/Map";
import SearchResult from "@pages/SearchResult";
import { GlobalStyle } from "@styles/GlobalStyles"; // 추후에 수정
import theme from "@styles/theme";
import { ThemeProvider } from "styled-components";
import Layout from "./Layout";
import { HelmetProvider } from "react-helmet-async";
import { NavermapsProvider } from "react-naver-maps";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChatBot from "@pages/ChatBot";

const qClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const pathList: Array<pathType> = [
    { path: "/", element: <Main /> },
    { path: "/search", element: <SearchResult /> },
];

const Router = () => {
    const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
    return (
        <BrowserRouter>
            <QueryClientProvider client={qClient}>
                <ThemeProvider theme={theme}>
                    <NavermapsProvider ncpClientId={clientId ? clientId : ``}>
                        <GlobalStyle />
                        <HelmetProvider>
                            <Routes>
                                <Route element={<Layout />}>
                                    {pathList.map(({ path, element }) => {
                                        return (
                                            <Route
                                                key={path}
                                                path={path}
                                                element={element}
                                            />
                                        );
                                    })}
                                    <Route path="*" element={<NotFound />} />
                                </Route>
                                <Route path="/map" element={<Map />} />
                                <Route path="/chatbot" element={<ChatBot />} />
                            </Routes>
                        </HelmetProvider>
                    </NavermapsProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default Router;
