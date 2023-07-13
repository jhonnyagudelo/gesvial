import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NoFound } from './components/NoFound/NoFound';
import { Layout } from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Service = lazy(() => import('./pages/Service'));
const Team = lazy(() => import('./pages/Team'));
const Contact = lazy(() => import('./pages/Contact'));
const AboutAs = lazy(() => import('./pages/AboutUs'));
const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Service" element={<Service />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/AboutUs" element={<AboutAs />} />
              <Route path="*" element={<NoFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
