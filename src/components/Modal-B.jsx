import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ButtonAbc from './ButtonAbc';

const ModalB = () => {
  const [users, setUsers] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    axios.get('https://contact.mediusware.com/api/contacts/').then((res) => {
      const data = res.data.results.filter(
        (user) => user.country.name === 'United States'
      );
      setUsers(data);
    });
  }, []);

  const userList = !checked ? users : users.filter((u) => u.id % 2 === 0);

  return (
    <>
      <ButtonAbc />
      <div className='container'>
        <table className='table table-striped '>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Country</th>
              <th scope='col'>Phone No</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.country.name}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <footer class='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
          <div class='form-check'>
            <input
              class='form-check-input'
              type='checkbox'
              onChange={() => setChecked(!checked)}
              value=''
              id='flexCheckDefault'
            />
            <label class='form-check-label' for='flexCheckDefault'>
              Only even
            </label>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ModalB;
