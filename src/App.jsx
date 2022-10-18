import {Routes,Route} from "react-router-dom"
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Layout />}> 
        <route index element={<Public />} />
        <route path="login" element={<Login />} />
      </Route>

      <Route path="/dash" element={<DashLayout />}>
        <route index element={<Welcome />} />
      </Route>
    </Routes>
  );
}

export default App;
