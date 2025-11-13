import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import NotFound from "./pages/NotFound";
import PrivateLayout from "./layout/PrivateLayout";
import AddNewUser from "./components/User/AddNewUser";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route path="/users" element={<AddNewUser />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;