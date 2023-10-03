import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Unauthorized from './screens/Unauthorized';
import Missing from './screens/Missing';

import './App.module.scss';
import { Register } from './screens/register/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />}>
        {/* public routes */}
        {/* <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} /> */}
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
