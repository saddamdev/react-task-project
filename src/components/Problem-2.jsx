import React from 'react';
import { NavLink } from 'react-router-dom';

const Problem2 = () => {
  return (
    <div className='container'>
      <div className='align-items-center justify-content-center row vh-100'>
        <div className='col-8'>
          <ul className='align-content-center flex-column gap-3 mb-3 nav nav-pills'>
            <li className='nav-item'>
              <NavLink to='/modal-a' className='nav-link active'>
                All Contacts
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/modal-b' className='nav-link active'>
                US Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
