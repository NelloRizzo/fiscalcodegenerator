import { useSelector, useDispatch } from 'react-redux';
import { SelectOptions } from '../SelectOptions/SelectOptions.js';
import { dataChangedAction, selectProvinceAction, calculateAction } from '../StateManagement/Store.js';

export function DataInputForm() {
    const provinces = useSelector(s => s.provinces)
    const citiesInProvince = useSelector(s => s.citiesInProvince)
    const data = useSelector(s => s.data)
    const fiscalCode = useSelector(s => s.fiscalCode)

    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(dataChangedAction(e.target.name, e.target.value))
    }
    const provinceChanged = (e) => dispatch(selectProvinceAction(e.target.value))
    const calculate = () => dispatch(calculateAction())
    return (
        < div className="container" >
            <h1>Inserimento Dati</h1>
            <div className="row">
                <label htmlFor='firstName'>Nome</label>
                <input type="text" autoComplete="false" id='firstName' name='firstName' value={data.firstName} onChange={handleChange} />
            </div>
            <div className="row">
                <label htmlFor='lastName'>Cognome</label>
                <input type="text" autoComplete="false" id='lastName' name='lastName' value={data.lastName} onChange={handleChange} />
            </div>
            <div className="row">
                <label htmlFor='birthday'>Data di nascita</label>
                <input type='date' id='birthday' name='birthday' value={data.birthday} onChange={handleChange} />
            </div>
            <div className="row">
                <label htmlFor='sex-male'>Sesso</label>
                <input type='radio' id='sex-male' name='gender' value='m' checked={data.gender === 'm'} onChange={handleChange} /><span className='radio-label'>M</span>
                <input type='radio' id='sex-female' name='gender' value='f' checked={data.gender === 'f'} onchange={handleChange} /><span className='radio-label'>F</span>
            </div>
            <div className="row">
                <label htmlFor='birth-province'>Città di nascita</label>
                <select id='birth-province' className='col-1' name='birthProvince' value={data.birthProvince} onChange={provinceChanged}>
                    <SelectOptions source={provinces} text='name' value='acronym' hint='Seleziona provincia'></SelectOptions>
                </select>
                <select id='birth-city' className='col-2' name='birthCityCode' onChange={handleChange}>
                    <SelectOptions source={citiesInProvince} text='name' value='code' hint='Seleziona città'></SelectOptions>
                </select>
            </div>
            <div className="row">
                <button type='button' onChange={calculate()}>Calcola</button>
            </div>
            <div>{fiscalCode}</div>
        </div >
    )
}