import React from 'react';
import { NavLink } from 'react-router-dom';

const btnA = { color: '#46139f' };
const btnB = { color: '#ff7f50' };
const btnC = { borderColor: '#46139f' };

const ButtonAbc = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='d-flex justify-content-center gap-3'>
          <button className='btn' style={btnA} type='button'>
            <NavLink to='/modal-a' className='nav-link active'>
              All Contacts
            </NavLink>
          </button>
          <button className='btn' style={btnB} type='button'>
            <NavLink to='/modal-b' className='nav-link active'>
              US Contacts
            </NavLink>
          </button>
          <button className='btn' style={btnC} type='button'>
            <NavLink to='/problem-2' className='nav-link active'>
              Close
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonAbc;
