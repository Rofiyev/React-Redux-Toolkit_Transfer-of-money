import { connect } from 'react-redux';
import React, { useContext, useRef } from 'react'
import { MyContext } from '../Users';
import { addUser, renameUser } from '../../Store/Users';

const FomrCard = ({ addUser, renameUser }) => {
  const ref = useRef(null);
  const { editActive, setEditActive, editID, setEditID } = useContext(MyContext);

  const getValue = e => {
    e.preventDefault();
    const { name, phone } = ref.current;

    const user = {
      name: name.value,
      phone: phone.value
    };

    if (name.value && phone.value) {
      if (editActive) {
        renameUser({ id: editID, value: user })
        setEditID('')
        setEditActive(false);
      } else {
        addUser(user)
      }

      ref.current.reset();
    }
  }

  return (
    <div className='card'>
      <div className="card-header">
        <h4>Foydalanuvchi qo'shish</h4>
      </div>
      <div className="card-body">
        <form id='FormUser' onSubmit={getValue} ref={ref} className='d-flex flex-column gap-3 pt-2 pb-5'>
          <input type="text" className='form-control' placeholder='Foydalanuvchi nomi' name='name' />
          <input type="number" className='form-control' placeholder='Telefon raqami' name='phone' />
        </form>
      </div>
      <div className="card-footer d-flex gap-2 justify-content-end">
        <button className='btn btn-dark'>Chiqish</button>
        <button className='btn btn-primary' type='submit' form='FormUser'>Saqlash</button>
      </div>
    </div>
  )
}

export default connect(null, ({ addUser, renameUser }))(FomrCard);