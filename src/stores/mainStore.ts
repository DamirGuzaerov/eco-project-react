import {ModalStore} from "./modalStore";
import authorizationStore from "./authorizationStore";

export class MainStore {
    modalStore: ModalStore;
    authorizationStore: authorizationStore;

    constructor() {
        this.modalStore = new ModalStore(this);
        this.authorizationStore = new authorizationStore(this);
    }
}

const mainStore = new MainStore();

export default mainStore;