import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../../Redux/Types'
import { MyContext } from '..';

const Table = () => {
  const [search, setSearch] = useState('')
  const data = useSelector(({ RankReducer }) => RankReducer.runks);
  const dispatch = useDispatch();
  const { editActive, setEditActive, setEditID, editID } = useContext(MyContext)

  const deleteItem = id => dispatch({ type: types.REMOVE_RUNK, payload: id });

  const editUser = id => {
    setEditID(id);
    setEditActive(true);
  }

  return (
    <div className='card'>
      <div className="card-header d-flex justify-content-between py-3">
        <input type="text" placeholder='Search...' className='form-control w-25' onChange={e => setSearch(e.target.value)} />
        <h4>Lavozimlar</h4>
        <button className="btn btn-dark">Qo'shish</button>
      </div>
      <div className="card-body">
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Nomi</th>
              <th>Maosh</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.filter(data => data.name.toLowerCase().includes(search))?.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.salary} $</td>
                <td className='d-flex gap-2'>
                  <button onDoubleClick={() => { setEditActive(false); setEditID('') }} onClick={() => editUser(item.id)} className={`btn btn-${editActive && editID == item.id ? 'dark' : 'outline-dark'}`}>
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