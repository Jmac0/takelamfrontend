import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import 'App.css';
import 'styles/routeAnimation.css';
import Layout from './routes/Layout';
import Home from './routes/Home';
import About from './routes/about';
import Interiors from './routes/interiors';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';

export default function App() {
  const location = useLocation();
  // eslint-disable-next-line no-console
  const path: string = location.pathname;

  // @ts-ignore
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={600}>
        <Routes location={location}>
          <Route path="/" element={<Layout path={path} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="interiors" element={<Interiors />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
