import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pathType } from "@_types/path";
import Main from "./pages/Main"; // 추후에 수정
import NotFound from "./pages/NotFound";
import { GlobalStyle } from "./styles/GlobalStyles"; // 추후에 수정
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import Layout from "./layout";

const pathList: Array<pathType> = [{ path: "/", element: <Main /> }];

const Router = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Layout>
                    <Routes>
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
                    </Routes>
                </Layout>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default Router;
