import { legacy_createStore as createStore } from 'redux'
import { PersonalData } from './Data.js'

export const FETCHED_CITIES = 'load cities'

const initialState = {
    provinces: [],
    cities: [],
    data: new PersonalData()
}

function reducer(state = initialState, action) {
    switch (action.name) {
        case FETCHED_CITIES:
            return { ...state, provinces: action.provinces, cities: action.cities }
        default:
            return { ...state }
    }
}

export const fetchedCitiesAction = (provinces, cities) => ({ name: FETCHED_CITIES, provinces: provinces, cities: cities })

export const store = createStore(reducer)