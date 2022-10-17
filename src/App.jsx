import {Routes,Route} from "react-router-dom"
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./components/Login";

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Layout />}> 
        <route index element={<Public />} />
        <route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
