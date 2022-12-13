import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Cadastro } from './pages/Cadastro';
import {GlobalStyle} from './styles/global'

function App() {
  return (
    <Router>
     <GlobalStyle/>
     <Routes>
        <Route path="/" element={<Cadastro />} />
     </Routes >
    </Router>
  );
}

export default App;
