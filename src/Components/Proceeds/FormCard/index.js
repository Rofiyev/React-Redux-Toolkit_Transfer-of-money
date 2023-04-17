import { connect } from 'react-redux';
import React, { useContext, useRef } from 'react'
import { MyContext } from '../Proceeds';
import { addProceeds, renameProceeds } from '../../Store/Proceeds';

const FomrCard = ({ pays, users, addProceeds, renameProceeds }) => {
  const ref = useRef(null);
  const { editActive, setEditActive, editID, setEditID } = useContext(MyContext)

  const getValue = (e) => {
    e.preventDefault();
    const { value, date, pay, user } = ref.current;
    const dateValue = Array.from(date.value).map(item => item === '-' ? '/' : item).reduce((prevValue, currentValue) => prevValue + currentValue, '');

    if (value.value && date.value && (pay.value && !pay.value?.includes('Kassani tanlang')) && (user.value && !user.value?.includes('Foydalanuvchini'))) {
      const obj = {
        name: user.value,
        pay: pay.value,
        value: value.value,
        date: dateValue
      }

      if (editActive) {
        renameProceeds({ id: editID, value: obj })
        setEditID('');
        setEditActive(false);
      } else {
        addProceeds(obj)
      }

      ref.current.reset();
    }
  }

  return (
    <div className='card'>
      <div className="card-header">
        <h4>Kirim</h4>
      </div>
      <div className="card-body">
        <form id='proceedsForm' onSubmit={getValue} ref={ref} className='d-flex flex-column gap-3 pt-2 pb-5'>
          <select className="form-select" name='user' defaultValue={'Foydalanuvchini tanlang'}>
            <option value={'Foydalanuvchini tanlang'} disabled>Foydalanuvchini tanlang</option>
            {users.map(item => (
              <option key={item.id} value={item.name}>{item.name}</option>
            ))}
          </select>
          <select className="form-select" name='pay' defaultValue={'Kassani tanlang'}>
            <option value={'Kassani tanlang'} disabled>Kassani tanlang</option>
            {pays.map(item => (
              <option key={item.id} value={item.name}>{item.name}</option>
            ))}
          </select>
          <input type="number" className='form-control' placeholder='Miqdori' name='value' />
          <input type="date" className='form-control' name='date' />
        </form>
      </div>
      <div className="card-footer d-flex gap-2 justify-content-end">
        <button className='btn btn-dark'>Chiqish</button>
        <button className='btn btn-primary' type='submit' form='proceedsForm'>Saqlash</button>
      </div>
    </div>
  )
}

export default connect(({ pays, users }) => ({ pays: pays.pay, users: users.users }), ({ addProceeds, renameProceeds }))(FomrCard);