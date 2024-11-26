import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { store } from './StateManagement/Store.js';
import { FiscalCodeView } from './FiscalCode/FiscalCode.js';
import { DataInputForm } from './DataInputForm/DataInputForm.js';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<DataInputForm />} />
          <Route path='/fiscalcode' element={<FiscalCodeView />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
