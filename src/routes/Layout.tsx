import React from 'react';

import { Outlet } from 'react-router-dom';
import { Container } from 'styles/Container.styles';
import Nav from 'Nav';

interface Path {
  path: string;
}
function Layout(props: Path) {
  // @ts-ignore
  // eslint-disable-next-line react/prop-types
  const { path } = props as string;
  const home = path === '/';

  return (
    <Container path={home}>
      <Nav path={home} />
      <Outlet />
    </Container>
  );
}

export default Layout;
