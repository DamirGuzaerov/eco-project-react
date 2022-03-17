import {ModalStore} from "./modalStore";
import authorizationStore from "./authorizationStore";
import {PhoneStore} from "./phoneStore";

export class MainStore {
    modalStore: ModalStore;
    authorizationStore: authorizationStore;
    phoneStore: PhoneStore;

    constructor() {
        this.modalStore = new ModalStore(this);
        this.authorizationStore = new authorizationStore(this);
        this.phoneStore = new PhoneStore(this);
    }
}

const mainStore = new MainStore();

export default mainStore;