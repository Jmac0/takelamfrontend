import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { SingleProperty } from '../components/SingleProperty';

/* eslint-disable react/no-unstable-nested-components */
function PrintSingleProperty() {
  const printRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });
  return (
      <SingleProperty ref={printRef} handlePrint={handlePrint} />
  );
}

export default PrintSingleProperty;
