import React, { useContext, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as types from '../../../Redux/Types'
import { MyContext } from '..';

const AddUserCard = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { editID, editActive, setEditActive } = useContext(MyContext)

  const getValue = () => {
    const { name, bonus } = ref.current;

    if (name.value && bonus.value) {
      const user = {
        name: name.value,
        bonus: bonus.value
      }

      if (editActive) {
        dispatch({ type: types.RENAME_LEVEL, payload: { id: editID, value: user } });
        setEditActive(false)
      } else {
        dispatch({ type: types.ADD_LEVEL, payload: user });
      }

      ref.current.reset();
    }
  }

  return (
    <div className='card'>
      <div className="card-header">
        <h4>Lavozim qo'shish</h4>
      </div>
      <div className="card-body">
        <form ref={ref} className='d-flex flex-column gap-3'>
          <input type="text" className='form-control' placeholder='Nomi' name='name' />
          <input type="number" className='form-control' placeholder='Bonus' name='bonus' />
          <br />
        </form>
      </div>
      <div className="card-footer d-flex gap-2 justify-content-end">
        <button className='btn btn-dark'>Chiqish</button>
        <button className='btn btn-primary' onClick={getValue}>Saqlash</button>
      </div>
    </div>
  )
}

export default AddUserCard;