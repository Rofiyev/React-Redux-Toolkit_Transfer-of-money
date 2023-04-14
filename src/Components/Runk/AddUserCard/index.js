import { useContext, useRef } from "react";
import * as types from '../../../Redux/Types'
import { useDispatch } from "react-redux";
import { MyContext } from "..";

const AddUserCard = () => {
  const ref = useRef();
  const dispach = useDispatch();
  const { setEditActive, editActive, editID } = useContext(MyContext);

  const getValue = () => {
    const { name, salary } = ref.current;

    if (name.value && salary.value) {

      const user = {
        name: name.value,
        salary: salary.value,
      }

      if (editActive) {
        dispach({ type: types.RENAME_RUNK, payload: { id: editID, value: user } });
        setEditActive(false);
      } else dispach({ type: types.ADD_RUNK, payload: user });


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
          <input type="number" className='form-control' placeholder='Maosh' name='salary' />
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