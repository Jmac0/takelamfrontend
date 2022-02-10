import React from 'react';
import { PageTear } from '../src/styles/Container.styles';

type Props = {
  path: boolean;
};

function Tear(props: Props) {
  const { path } = props;
  return <PageTear path={path} />;
}

export default Tear;
