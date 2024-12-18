import { makeAutoObservable } from 'mobx';
export default class CookStore {
    constructor() {
        this._languages = [
        {id:1, name: 'English', icon: 'en'},
        {id:2, name: 'German', icon: 'en'},
        {id:3, name: 'Chinese', icon: 'en'},
        {id:4, name: 'Italian', icon: 'en'},
        {id:5, name: 'Hebrew', icon: 'en'}
        ]
        this._currency = [
        {id:1, name: 'USD'},
        {id:2, name: 'EUR'},
        {id:3, name: 'UAH'},
        {id:4, name: 'GBP'},
        {id:5, name: 'CHF'}
        ]
        this._statistics  = [
            {id: 1, text: 'Talented Chefs', data: 100},
            {id: 2, text: 'Students', data: 1000},
            {id: 3, text: 'Rating', data: 4.8},
            {id: 4, text: 'Cooking Categories', data: 20}
        ]
        this._selectedLang = 'Eng'
        this._selectedCurr = 'USD'
        makeAutoObservable(this)
    }
    // set

    setLanguages(languages) {
        this._languages = languages
    }
    setCurrency(currency) {
        this._currency = currency
    }
    setStatistics(statistics) {
        this._statistics = statistics
    }
    setSelectedLang(lang) {
        this._selectedLang = lang
    }

    setSelectedCurr(curr) {
        this._selectedCurr = curr
    }

    // get

    get currency() {
        return this._currency
    }


    get language() {
        return this._languages
    }
    get statistics() {
        return this._statistics
    }
    get selectedLang() {
        return this._selectedLang
    }

    get selectedCurr() {
        return this._selectedCurr
    }

}