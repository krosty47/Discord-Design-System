import { FC, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/navBar";
import { createGlobalStyle } from "styled-components";
import { BrandIdentity } from "./pages/BrandIdentity/BrandIdentity";

const GlobalStyles = createGlobalStyle`
  html, body {
    @font-face {
    background-color: #FFFFFF;
    font-family: 'Whitney-Book-Bas'; 
    src: local('Whitney-Book-Bas'), url(../fonts/Whitney-Book-Bas.woff) format('woff');
    margin: 0;
    padding: 0;
    }
  }
`;

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="brandidentity" element={<BrandIdentity />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
