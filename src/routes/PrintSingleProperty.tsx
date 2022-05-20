import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { SingleProperty } from '../components/SingleProperty';

import useAuth from '../components/auth/useAuth';
/* eslint-disable react/no-unstable-nested-components */
function PrintSingleProperty() {
  const auth = useAuth()
  const printRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });
  return (
    <div />
/*
      <SingleProperty ref={printRef} handlePrint={handlePrint} auth={auth} />
*/
  );
}

export default PrintSingleProperty;
