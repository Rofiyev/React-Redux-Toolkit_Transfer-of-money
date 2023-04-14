import { Link, Route, Routes } from "react-router-dom";
import Employess from "./Components/Employess";
import Runk from "./Components/Runk";
import Level from "./Components/Level";

const headerData = [{ slug: '/', name: 'Xodimlar' }, { slug: '/lavozimlar', name: 'Lavozimlar' }, { slug: '/ilmiy-daraja', name: 'Ilmiy Darajalar' }]

function App() {
  return (
    <>
      <div className="container-fluid px-5 m-auto">
        <nav className="container d-flex align-items-center justify-content-between mb-5 pt-4">
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

        <Routes>
          <Route path="/" element={<Employess />} />
          <Route path="/lavozimlar" element={<Runk />} />
          <Route path="/ilmiy-daraja" element={<Level />} />
        </Routes>

      </div>
    </>
  );
}

export default App;