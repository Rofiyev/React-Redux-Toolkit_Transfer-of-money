import * as types from '../../../Redux/Types';
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyContext } from '..';

const Table = () => {
  const [search, setSearch] = useState('');
  const usersData = useSelector(({ UsersReducer }) => UsersReducer.users);
  const dispatch = useDispatch();
  const { setEditActive, setEditID, editActive, editID } = useContext(MyContext);

  const deleteItem = (id) => dispatch({ type: types.REMOVE_USER, payload: id });

  const editFunc = id => {
    setEditID(id);
    setEditActive(true);
  }



  return (
    <div className='card'>
      <div className="card-header d-flex justify-content-between py-3">
        <input type="text" placeholder='Search...' className='form-control w-25' onChange={e => setSearch(e.target.value)} />
        <h4>Xodimlar</h4>
        <button className="btn btn-dark">Qo'shish</button>
      </div>
      <div className="card-body">
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Ism</th>
              <th>Familya</th>
              <th>Telefon</th>
              <th>Lavozimi</th>
              <th>Ilmiy daraja</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usersData.filter(data => data.firstName.toLowerCase().includes(search) || data.lastName.toLowerCase().includes(search)).map((item, index) => (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phone}</td>
                <td>{item.runk}</td>
                <td>{item.level}</td>
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
    </div >
  )
}

export default Table