import React from 'react'
import { connect } from 'react-redux'

const Table = ({ users, pays, output, proceeds }) => {

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Foydalanuvchi</th>
          {pays.map(item => (
            <th key={item.id} scope="col">{item.name}</th>
          ))}
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td>{user.name}</td>
            {pays.map(pay => (
              <td key={pay.id}>
                {`
                ${`
                ${proceeds.map(data => user.name === data.name && data.pay === pay.name ? data.value : 0).map(item => item).reduce((prev, current) => prev + current, 0)}`
                  -
                  `${output.map(data => user.name === data.name && data.pay === pay.name ? data.value : 0).map(item => item).reduce((prev, current) => prev + current, 0)}`
                  }$`
                }
              </td>
            ))}
            <td>
              {
                `${`${proceeds.map(data => data.name === user.name && data.value).map(item => item).reduce((prev, current) => prev + current, 0)}`
                -
                `${output.map(data => data.name === user.name && data.value).map(item => item).reduce((prev, current) => prev + current, 0)}`
                }$`
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default connect(({ users, pays, output, proceeds }) => ({ users: users.users, pays: pays.pay, output: output.output, proceeds: proceeds.proceeds }), null)(Table)