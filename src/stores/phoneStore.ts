import {makeAutoObservable, makeObservable, observable} from "mobx";
import {MainStore} from "./mainStore";

export class PhoneStore {
    number = ''

    constructor(mainStore: MainStore) {
        this.number = '';
        makeObservable(this, {
            number: observable
        })
    }

    addNumber = (number: string) => {
        this.number = number;
    }

    removeNumber = () => {
        this.number = '';
    }

    public getNumber = () => {
        return this.number;
    }
}