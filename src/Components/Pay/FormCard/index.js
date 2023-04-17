import { connect, useDispatch } from 'react-redux';
import React, { useContext, useRef } from 'react';
import { MyContext } from '../Pay';
import { addPay, renamePay } from '../../Store/Pay';

const FomrCard = ({ addPay, renamePay }) => {
  const ref = useRef(null);
  const { edit, setEdit, setEditID, editID } = useContext(MyContext);


  const getValue = (e) => {
    e.preventDefault();

    let name = ref.current.name.value;
    if (name) {

      if (edit) {
        renamePay({ id: editID, value: name });
        setEdit(false)
        setEditID('');
      } else {
        addPay(name);
      }

      ref.current.reset();
    }
  };

  return (
    <div className='card'>
      <div className="card-header">
        <h4>Kassa qo'shish</h4>
      </div>
      <div className="card-body">
        <form id='payForm' onSubmit={getValue} ref={ref} className='d-flex flex-column gap-3 pt-2 pb-5'>
          <input type="text" className='form-control' placeholder='Nomi' name='name' />
        </form>
      </div>
      <div className="card-footer d-flex gap-2 justify-content-end">
        <button className='btn btn-dark'>Chiqish</button>
        <button className='btn btn-primary' type='submit' form='payForm'>Saqlash</button>
      </div>
    </div>
  )
}

export default connect(null, ({ addPay, renamePay }))(FomrCard);