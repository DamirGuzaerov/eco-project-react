import {ModalStore} from "./modalStore";
import authorizationStore from "./authorizationStore";
import {PhoneStore} from "./phoneStore";
import FilterStore from "./filterStore";

export class MainStore {
    modalStore: ModalStore;
    authorizationStore: authorizationStore;
    phoneStore: PhoneStore;
    filterStore: FilterStore

    constructor() {
        this.modalStore = new ModalStore(this);
        this.authorizationStore = new authorizationStore(this);
        this.phoneStore = new PhoneStore(this);
        this.filterStore = new FilterStore(this);
    }
}

const mainStore = new MainStore();

export default mainStore;