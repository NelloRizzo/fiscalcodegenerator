import { useEffect } from 'react';
import { fetchCities } from '../StateManagement/CitiesLoader/CitiesLoader.js'
import { useDispatch } from 'react-redux';
import { fetchedCitiesAction } from '../StateManagement/Store.js';

export function DataInputForm() {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetch = async () => {
            const { provinces, cities } = await fetchCities()
            dispatch(fetchedCitiesAction(provinces, cities))
        }
        fetch()
    }, [dispatch])
    return (
        <div className="container">
            <h1>Inserimento Dati</h1>
            <div className="row">
                <label for='firstName'>Nome</label>
                <input type="text" autoComplete="false" id='firstName' />
            </div>
            <div className="row">
                <label for='lastName'>Cognome</label>
                <input type="text" autoComplete="false" id='lastName' />
            </div>
            <div className="row">
                <label for='birthday'>Data di nascita</label>
                <input type='date' id='birthday' />
            </div>
            <div className="row">
                <label for='sex-male'>Sesso</label>
                <input type='radio' id='sex-male' name='sex' value='m' checked /><span className='radio-label'>M</span>
                <input type='radio' id='sex-female' name='sex' value='f' /><span className='radio-label'>F</span>
            </div>
            <div className="row">
                <label for='birth-province'>Città di nascita</label>
                <select id='birth-province' />
                <select id='birth-city' />
            </div>
            <div className="row">
                <button type='button'>Calcola</button>
            </div>
        </div>
    )
}