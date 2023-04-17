import React, { useState } from 'react'
import Table from './Table';
import FomrCard from './FormCard';
import { createContext } from 'react';

export const MyContext = createContext();

const Output = () => {
  const [editActive, setEditActive] = useState(false);
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

export default Output;