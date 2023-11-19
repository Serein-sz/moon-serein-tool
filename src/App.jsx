import { HashRouter, Routes, Route } from 'react-router-dom';
import FinancialManagement from './view/financialManagement/financialManagement';
import Login from './view/Login';
import Home from './view/Home';
import useAuth from './hooks/useAuth';
import CodeNotes from './view/codeNotes/CodeNotes';

function App() {
  const { auth } = useAuth();
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={auth(<Home />)}>
          <Route path="code-notes" element={auth(<CodeNotes />)} />
          <Route path="financialManagement" element={auth(<FinancialManagement />)} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
