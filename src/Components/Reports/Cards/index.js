import React from 'react'
import { connect } from 'react-redux'

const Card = ({ output, proceeds, pays }) => {

  return (
    <div className='row'>
      {pays.map(item => {
        const income = proceeds.map(data => data.pay === item.name && data.value).filter(data => data).reduce((prev, current) => prev + current, 0);
        const expense = output.map(data => data.pay === item.name && data.value).filter(data => data).reduce((prev, current) => prev + current, 0);

        return (
          <div key={item.id} className="col-md-6 col-lg-4 col-sm-12 mb-4">
            <div className="card" style={{minHeight: '250px'}}>
              <div className="card-header text-center">
                <h3>{item.name}</h3>
                <h3>{income - expense} $</h3>
              </div>
              <div className="card-body d-flex gap-5 justify-content-between">
                <div>
                  <h4>Kirim</h4>
                  <ul style={{ listStyleType: 'none', padding: '0px' }}>
                    {proceeds.filter(data => data.pay === item.name).map(item => (
                      <li key={item.id}><span className='fw-bold fs-5' style={{ color: 'blue' }}>+{item.value} $</span></li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4>Chiqim</h4>
                  <ul style={{ listStyleType: 'none', padding: '0px' }}>
                    {output.filter(data => data.pay === item.name).map(item => (
                      <li key={item.id}><span className='fw-bold fs-5' style={{ color: 'crimson' }}>-{item.value} $</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default connect(({ output, proceeds, pays }) => ({ output: output.output, proceeds: proceeds.proceeds, pays: pays.pay }), null)(Card)