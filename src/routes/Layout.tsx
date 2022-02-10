import React from 'react';

import { Outlet } from 'react-router-dom';
import { Container, PageTear } from 'styles/Container.styles';
import Nav from 'Nav';

interface Path {
  path: string;
}
function Layout(props: Path) {
  const { path } = props;
  const home = path === '/';

  return (
    <Container path={home}>
      <Nav path={home} />
      <PageTear path={home} />
      <Outlet />
    </Container>
  );
}

export default Layout;
