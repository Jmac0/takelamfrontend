import React from 'react';

import { Outlet } from 'react-router-dom';
import { Container, PageLogo, PageTear } from 'styles/Container.styles';
import Nav from 'components/Nav';

interface Path {
  path: string;
}
function Layout(props: Path) {
  const { path } = props;
  const home = path === '/';
  const about = path.includes('/about');

  return (
    <Container path={home}>
      <PageLogo path={home} />
      <Nav path={home} about={about} />
      <Outlet />
      <PageTear path={home} />
    </Container>
  );
}

export default Layout;
