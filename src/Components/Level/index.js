import { createContext, useState } from 'react'
import AddUserCard from './AddUserCard'
import Table from './Table';

export const MyContext = createContext();

const Level = () => {
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

export default Level