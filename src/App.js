import { Link, Route, Routes } from "react-router-dom";
import PayOffice from "./Components/Pay/Pay";
import Output from "./Components/Output/Output";
import Proceeds from "./Components/Proceeds/Proceeds";
import Users from "./Components/Users/Users";
import Reports from "./Components/Reports/Reports";

const headerData = [{ slug: '/', name: 'Kassa' }, { slug: '/proceeds', name: 'Kirim' }, { slug: '/output', name: 'Chiqim' }, { slug: '/users', name: 'Users' }, { slug: '/reports', name: 'Hisobot' }];

function App() {
  return (
    <>
      <div className="container-fluid px-5 m-auto">
        <nav className="container d-flex align-items-center justify-content-between pt-4">
          <h4>Redux</h4>

          <ul className="d-flex gap-3" style={{ listStyleType: 'none', margin: 'auto 0', padding: '0px' }}>
            {headerData.map((item, i) => (
              <li key={i}>
                <Link style={{ textDecoration: 'none' }} to={item.slug}>
                  <span style={{ color: '#152035', fontWeight: '500' }}>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <hr />
        <br />
        <Routes>
          <Route path="/" element={<PayOffice />} />
          <Route path="/proceeds" element={<Proceeds />} />
          <Route path="/output" element={<Output />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>

      </div>
    </>
  );
}

export default App;