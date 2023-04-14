import { createContext, useContext, useState } from "react";
import AddUserCard from "./AddUserCard"
import Table from "./Table";

export const MyContext = createContext({});

const Employess = () => {
  const [editActive, setEditActive] = useState(false);
  const [editID, setEditID] = useState('');

  return (
    <MyContext.Provider value={{ setEditActive, editActive, setEditID, editID }}>
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

export default Employess