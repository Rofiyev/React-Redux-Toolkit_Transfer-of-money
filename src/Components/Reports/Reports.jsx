import Card from './Cards';
import Table from './Table';
import Chart from './Chart';
import { connect } from 'react-redux';

const Reports = ({ output, proceeds }) => {
  return (
    <div className='container py-2'>
      <div className="row">
        <div className="col-12">
          <h3>Kassa </h3>
          <br />
          <Card />
        </div>
        <hr />
        <div className="col-12">
          <h3>Users</h3>
          <br />
          <Table />
        </div>
        <hr />
        <div className="col-12">
          <h3>Diagramma</h3>
          <br />
          <div className="row">
            <div className="col-md-6">
              <h5 className='text-center'>Kirim</h5>
              <Chart value={proceeds} />
            </div>
            <div className="col-md-6">
              <h5 className='text-center'>Chiqim</h5>
              <Chart value={output} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(({ output, proceeds }) => ({ output: output.output, proceeds: proceeds.proceeds }), null)(Reports)