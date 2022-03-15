import {MainStore} from './mainStore';
import {makeAutoObservable} from "mobx";

export class ModalStore {
    currentModal = null

    constructor(mainStore: MainStore) {
        this.currentModal = null;
        makeAutoObservable(this);
    }

    addModal = (modal: any) => {
        this.currentModal = modal;
    }

    removeModal = () => {
        this.currentModal = null;
    }
}
