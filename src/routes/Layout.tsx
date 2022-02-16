import React from 'react';

import { Outlet } from 'react-router-dom';
import MobileNavBar from 'components/MobileNavBar';
import { Container, PageLogo, PageTear } from 'styles/Container.styles';
import Nav from 'components/Nav';
import MobileNavMenu
  from '../components/MobileNavMenu';
import ToggleOpen from '../hooks/useToggleState';

interface Path {
  path: string;
}
function Layout({ path }:Path) {
  const home: boolean = path === '/';
  const about: boolean = path.includes('/about');
  const [open, setOpen] = ToggleOpen(false);

  return (
    <Container path={home}>
      <MobileNavBar path={home} open={open} setOpen={setOpen} />
      <MobileNavMenu setOpen={setOpen} open={open} />
      <PageLogo path={home} />
      <Nav path={home} about={about} />
      <Outlet />
      <PageTear path={home} />
    </Container>
  );
}

export default Layout;
