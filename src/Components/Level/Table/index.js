import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../../Redux/Types'
import { MyContext } from '..';

const Table = () => {
  const [search, setSearch] = useState('')
  const data = useSelector(({ LevelsReducer }) => LevelsReducer.levels);
  const dispatch = useDispatch();
  const { editActive, setEditActive, editID, setEditID } = useContext(MyContext);

  const deleteItem = id => dispatch({ type: types.REMOVE_LEVEL, payload: id });

  const editFunc = id => {
    console.log(id);
    setEditID(id)
    setEditActive(true)
  }

  return (
    <div className='card'>
      <div className="card-header d-flex justify-content-between py-3">
        <input type="text" placeholder='Search...' className='form-control w-25' onChange={e => setSearch(e.target.value)} />
        <h4>Ilmiy Darajasi</h4>
        <button className="btn btn-dark">Qo'shish</button>
      </div>
      <div className="card-body">
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Nomi</th>
              <th>Bonus</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.filter(data => data.name.toLowerCase().includes(search))?.map((item, index) => (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.bonus}</td>
                <td className='d-flex gap-2'>
                  <button onDoubleClick={() => { setEditActive(false); setEditID('') }} onClick={() => editFunc(item.id)} className={`btn btn-${editActive && editID == item.id ? 'dark' : 'outline-dark'}`}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button onClick={() => deleteItem(item.id)} className='btn btn-outline-danger'>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table