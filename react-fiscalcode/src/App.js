import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FiscalCodeView } from './FiscalCode/FiscalCode.js';
import { DataInputForm } from './DataInputForm/DataInputForm.js';
import { useDispatch } from 'react-redux';
import { fetchedCitiesAction, selectProvinceAction } from './StateManagement/Store.js';
import { useEffect } from 'react';
import { fetchCities } from './StateManagement/CitiesLoader/CitiesLoader.js'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetch = async () => {
      const { provinces, cities } = await fetchCities()
      dispatch(fetchedCitiesAction(provinces, cities))
      dispatch(selectProvinceAction(provinces[0].acronym))
    }
    fetch()
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<DataInputForm />} />
        <Route path='/fiscalcode' element={<FiscalCodeView />} />
      </Routes>
    </Router>
  );
}

export default App;
