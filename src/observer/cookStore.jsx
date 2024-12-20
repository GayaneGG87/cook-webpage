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
        this._tutors = [
            {id: 1, title: 'Bakery' , description: 'Master baking: from rustic breads to delicate pastries'},
            {id: 2, title: 'Vegan Cooking' , description: 'Create delicious, nutritious meals with plant-based ingredients'},
            {id: 3, title: 'Sea Food Mastery' , description: 'Dive into seafood: from grilling fish to creating sushi'},
            {id: 4, title: 'BBQ & Grilling' , description: 'Fire up your skills with mouth-watering BBQ dishes'},
            {id: 5, title: 'Wine Pairing' , description: 'Enhance culinary experiences by mastering wine pairing'},
            {id: 6, title: 'Cake Decorating' , description: 'Unleash creativity with cake decorating techniques'},
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
    setStatistics(tutors) {
        this._tutors = tutors
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
    get tutors() {
        return this._tutors
    }
    get selectedLang() {
        return this._selectedLang
    }

    get selectedCurr() {
        return this._selectedCurr
    }

}