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
    get selectedLang() {
        return this._selectedLang
    }

    get selectedCurr() {
        return this._selectedCurr
    }

}