import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import 'styles/routeAnimation.css';
import Layout from './routes/Layout';
import LandingPage from './routes/LandingPage';
import Page from './routes/Page';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';
import fetchContent from './hooks/fetchContent';
import Admin from './routes/Admin';
import SingleProperty from './components/SingleProperty';
import Login from './routes/Login';
import { AuthProvider } from './components/auth/AuthProvider';
import RequireAuth from './components/auth/RequireAuth';
import Users from './routes/Users';

interface Component {
  index: string;
  _id: string;
  componentName: string;
  path: string;
  heading: string;
  bodyText: string;
}

export default function App() {
  const location = useLocation();
  const path: string = location.pathname;
  const [pageContent, setIndex] = fetchContent([]);
	// eslint-disable-next-line no-constant-condition
  const transitionTime = path.includes('admin') || path.includes('users') ? 0 : 650;

  console.log(transitionTime)
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {path.includes('login' || 'admin' || 'users') ? (
        <AuthProvider>
          <Routes location={location}>
            {/*
			<Route path="/" element={<Layout path={path} />}>
						<Route index element={<LandingPage />} />
						{pageContent.map((el: Component) => (
							<Route
								key={el._id}
								path={el.path}
								element={<Page heading={el.heading} bodyText={el.bodyText} />}
							/>
						))}
						<Route path="contact" element={<Contact />} />
						<Route path="*" element={<NotFound />} />
						<Route path="property/:id" element={<SingleProperty />} />
						<Route path="property/view/:id" element={<SingleProperty />} />
					</Route>
*/}
            <Route path="login" element={<Login />} />
            <Route
              path="admin"
              element={
                <RequireAuth>
                  <Admin pages={pageContent} setIndex={setIndex} />
                </RequireAuth>
              }
            />

            <Route path="users" element={<Users />} />
          </Routes>
        </AuthProvider>
      ) : (
        <AuthProvider>
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={transitionTime}>
              <Routes location={location}>
                <Route path="/" element={<Layout path={path} />}>
                  <Route index element={<LandingPage />} />
                  {pageContent.map((el: Component) => (
                    <Route
                      key={el._id}
                      path={el.path}
                      element={
                        <Page heading={el.heading} bodyText={el.bodyText} />
                      }
                    />
                  ))}
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="property/:id" element={<SingleProperty />} />
                  <Route
                    path="property/view/:id"
                    element={<SingleProperty />}
                  />
                </Route>
                <Route
                  path="/admin"
                  element={
                    <RequireAuth>
                      <Admin pages={pageContent} setIndex={setIndex} />
                    </RequireAuth>
                  }
                />

                <Route path="login" element={<Login />} />
                <Route path="users" element={<Users />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </AuthProvider>
      )}
    </>
  );
}
