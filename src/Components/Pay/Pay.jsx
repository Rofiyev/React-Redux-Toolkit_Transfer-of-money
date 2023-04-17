import React, { createContext, useState } from 'react'
import Table from './Table';
import FomrCard from './FormCard';
export const MyContext = createContext();

const PayOffice = () => {
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState('');

  return (
    <MyContext.Provider value={{ edit, setEdit, editID, setEditID }}>
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

export default PayOffice;