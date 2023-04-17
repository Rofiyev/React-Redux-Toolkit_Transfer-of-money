import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { connect } from 'react-redux';
import { MyContext } from '../Output';
import { removeOutput } from '../../Store/Output';

const Table = ({ output, removeOutput }) => {
  const { editActive, setEditActive, editID, setEditID } = useContext(MyContext);

  const deleteItem = id => removeOutput(id);

  const editFunc = id => {
    setEditActive(true);
    setEditID(id);
  }

  return (
    <div className='card'>
      <div className="card-header d-flex justify-content-between py-3 bg-white">
        <div></div>
        <h4>Chiqim</h4>
        <button className="btn btn-dark">Qo'shish</button>
      </div>
      <div className="card-body">
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Nomi</th>
              <th>Miqdori</th>
              <th>Kassa</th>
              <th>Vaqti</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {output.map((item, index) => (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.value}</td>
                <td>{item.pay}</td>
                <td>{item.date}</td>
                <td className='d-flex gap-2'>
                  <button className={`btn btn-${editActive && editID === index ? 'dark' : 'outline-dark'}`} onClick={() => editFunc(index)} onDoubleClick={() => { setEditActive(false); setEditID('') }}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className='btn btn-outline-danger'>
                    <FontAwesomeIcon icon={faXmark} onClick={() => deleteItem(item.id)} />
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

export default connect((({ output }) => ({ output: output.output })), ({ removeOutput }))(Table)