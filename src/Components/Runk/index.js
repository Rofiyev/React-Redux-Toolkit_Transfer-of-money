import { useState } from 'react'
import AddUserCard from './AddUserCard'
import Table from './Table'
import { createContext } from 'react'

export const MyContext = createContext();

const Runk = () => {
  const [editID, setEditID] = useState('');
  const [editActive, setEditActive] = useState(false);

  return (
    <MyContext.Provider value={{ editID, setEditID, editActive, setEditActive }}>
      <div className="row">
        <div className="col-md-9">
          <Table />
        </div>
        <div className="col-md-3">
          <AddUserCard />
        </div>
      </div>
    </MyContext.Provider>
  )
}

export default Runk;
