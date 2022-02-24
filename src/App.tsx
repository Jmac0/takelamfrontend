import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import 'App.css';
import 'styles/routeAnimation.css';
import Layout from './routes/Layout';
import LandingPage from './routes/LandingPage';
import Page from './routes/Page';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';
import fetchContent from './hooks/fetchContent';

interface Component {
   index: string
   _id: string
   componentName: string
   path: string
   heading: string
   bodyText: string

}

export default function App() {
  const location = useLocation();
  const path: string = location.pathname;
  const [state] = fetchContent();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={450}>
        <Routes location={location}>
          <Route path="/" element={<Layout path={path} />}>
            <Route index element={<LandingPage />} />
            {state.map((el: Component) => (
              <Route
                key={el._id}
                path={el.path}
                element={<Page heading={el.heading} bodyText={el.bodyText} />}
              />
            ))}
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
