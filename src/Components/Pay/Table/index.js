import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { connect } from 'react-redux';
import { MyContext } from '../Pay';
import { removePay } from '../../Store/Pay';

const Table = ({ pays, removePay }) => {
  const { edit, setEdit, setEditID, editID } = useContext(MyContext);


  const deleteItem = id => removePay(id);

  const editFunc = id => {
    setEditID(id);
    setEdit(true)
  }

  return (
    <div className='card'>
      <div className="card-header d-flex justify-content-between py-3 bg-white">
        <div></div>
        <h4>Kassa</h4>
        <button className="btn btn-dark">Qo'shish</button>
      </div>
      <div className="card-body">
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Nomi</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pays.map((item, index) => (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td className='d-flex gap-2'>
                  <button className={`btn btn-${edit && editID === index ? 'dark' : 'outline-dark'}`} onClick={() => editFunc(index)} onDoubleClick={() => { { { setEdit(false); setEditID('') } } }}>
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

export default connect(({ pays }) => ({ pays: pays.pay }), ({ removePay }))(Table)