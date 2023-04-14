import * as types from '../../../Redux/Types';
import React, { useContext, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MyContext } from '..';

const AddUserCard = () => {
  const [runk, setRunk] = useState('Lavozimi');
  const [level, setLevel] = useState('Ilmiy daraja');
  const ref = useRef();
  const dispatch = useDispatch();
  const runks = useSelector(({ RankReducer }) => RankReducer.runks);
  const levels = useSelector(({ LevelsReducer }) => LevelsReducer.levels);
  const { editActive, editID, setEditActive } = useContext(MyContext);

  const getValue = () => {
    const { firstName, lastName, phone, runk, level } = ref.current;

    if (firstName.value && lastName.value && phone.value && runk.value && level.value) {

      const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        runk: runk.value,
        level: level.value,
      }

      if (editActive) {
        dispatch({ type: types.RENAME_USER, payload: { value: user, id: editID } });
        setEditActive(false);
      }
      else { dispatch({ type: types.ADD_USER, payload: user }); }



      setRunk('Lavozimi');
      setLevel('Ilmiy daraja');
      ref.current.reset();
    }
  }

  return (
    <div className='card'>
      <div className="card-header">
        <h4>Xodim qo'shish</h4>
      </div>
      <div className="card-body">
        <form ref={ref} className='d-flex flex-column gap-3'>
          <input type="text" className='form-control' placeholder='Ism' name='firstName' />
          <input type="text" className='form-control' placeholder='Familya' name='lastName' />
          <input type="number" className='form-control' placeholder='Telefon' name='phone' />

          <select className="form-select" name='runk' defaultValue={runk}>
            <option value={'Lavozimi'} disabled>Lavozimi</option>
            {runks?.map(item => (
              <option key={item.id} value={item.name}>{item.name}</option>
            ))}
          </select>

          <select className="form-select" name='level' defaultValue={level}>
            <option value='Ilmiy daraja' disabled>Ilmiy daraja</option>
            {levels?.map(item => (
              <option key={item.id} value={item.name}>{item.name}</option>
            ))}
          </select>
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