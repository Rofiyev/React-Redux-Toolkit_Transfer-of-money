import React, { createContext, useState } from 'react'
import Table from './Table';
import FomrCard from './FormCard';

export const MyContext = createContext();

const Users = () => {
  const [editActive, setEditActive] = useState(false)
  const [editID, setEditID] = useState('');

  return (
    <MyContext.Provider value={{ editActive, setEditActive, editID, setEditID }}>
      <div className="row">
        <div className="col-md-9">
          <Table />
        </div>
        <div className="col-md-3">
          <FomrCard />
        </div>
      </div>
    </MyContext.Provider>
  )
}

export default Users;