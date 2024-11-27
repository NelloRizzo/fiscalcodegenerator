import { legacy_createStore as createStore } from 'redux'

const FETCHED_CITIES = 'load cities'
const SELECT_PROVINCE = 'province selected'
const SELECT_CITY = 'city selected'
const DATA_CHANGED = 'personal data changed'

const initialState = {
    provinces: [],
    cities: [],
    citiesInProvince: [],
    data: { firstName: '', lastName: '', birthday: '', gender: '', birthProvince: '', birthCityCode: '', birthCity: '' },
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCHED_CITIES:
            return { ...state, provinces: action.provinces, cities: action.cities }
        case SELECT_PROVINCE:
            const cp = state.cities.filter(c => c.acronym === action.selectedProvince)
            return { ...state, citiesInProvince: cp, data: { ...state.data, birthProvince: action.selectedProvince } }
        case SELECT_CITY:
            return { ...state, data: { ...state.data, birthCity: action.birthCity, birthCityCode: action.birthCityCode } }
        case DATA_CHANGED:
            return { ...state, data: { ...state.data, [action.field]: action.value } }
        default:
            return { ...state }
    }
}

export const fetchedCitiesAction = (provinces, cities) => ({ type: FETCHED_CITIES, provinces: provinces, cities: cities })
export const selectProvinceAction = (acronym) => ({ type: SELECT_PROVINCE, selectedProvince: acronym })
export const selectCityAction = (city, code) => ({ type: SELECT_CITY, selectedCity: city, selectedCityCode: code })
export const dataChangedAction = (field, value) => ({ type: DATA_CHANGED, field: field, value: value })

export const store = createStore(reducer)