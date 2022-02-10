import React from 'react';

import { Outlet } from 'react-router-dom';
import { Container, PageLogo, PageTear } from 'styles/Container.styles';
import Nav from 'Nav';

interface Path {
  path: string;
}
function Layout(props: Path) {
  const { path } = props;
  const home = path === '/';

  return (
    <Container path={home}>
      <PageLogo path={home} />
      <Nav path={home} />
      <Outlet />
      <PageTear path={home} />
    </Container>
  );
}

export default Layout;
