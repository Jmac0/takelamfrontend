import React, {} from 'react';
/*
import getInvoices from 'dummyData';
import { NavLink, Outlet } from 'react-router-dom';

*/

function Interiors() {
  /* const data: Data[] = getInvoices(); */

  return (
    <div>
      <h1>Interiors</h1>
    </div>
  /*
    <div style={{ display: 'flex' }}>
      <nav
        style={{ borderRight: 'solid 1px', padding: '1rem' }}
      >
        {data.map((invoice) => (
          <NavLink
            style={({ isActive }) => ({
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : 'hotpink',
            })}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}

          </NavLink>
        ))}
      </nav>

      <Outlet />
    </div>
*/
  );
}

export default Interiors;
