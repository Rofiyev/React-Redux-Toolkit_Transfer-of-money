import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { connect } from 'react-redux';
import { MyContext } from '../Users';
import { removeUser } from '../../Store/Users';

const Table = ({ users, removeUser }) => {
  const { editActive, setEditActive, setEditID, editID } = useContext(MyContext);

  const deleteItem = id => removeUser(id);

  const editFunc = id => {
    setEditActive(true);
    setEditID(id)
  }

  return (
    <div className='card'>
      <div className="card-header d-flex justify-content-between py-3 bg-white">
        <div></div>
        <h4>Foydalanuvchilar</h4>
        <button className="btn btn-dark">Qo'shish</button>
      </div>
      <div className="card-body">
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Foydalanuvchi nomi</th>
              <th>Telefon raqami</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td className='d-flex gap-2'>
                  <button className={`btn btn-${editActive && editID === index ? 'dark' : 'outline-dark'}`} onClick={() => editFunc(index)} onDoubleClick={() => { setEditActive(false); setEditID('') }}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className='btn btn-outline-danger' onClick={() => deleteItem(item.id)}>
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

export default connect(({ users }) => ({ users: users.users }), ({ removeUser }))(Table);