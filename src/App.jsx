import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import NotFound from "./pages/NotFound";
import PrivateLayout from "./layout/PrivateLayout";
import AddNewUser from "./components/User/AddNewUser";
import UserTable from "./pages/User";

import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateLayout />}>
          <Route path="/user" element={<UserTable />} />
          <Route path="/user/:userId" element={<AddNewUser />} />
        </Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;