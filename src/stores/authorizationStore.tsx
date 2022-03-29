import {MainStore} from "./mainStore";
import {makeObservable, observable} from "mobx";

interface userProps{
    token: string,
    id?: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    username: string,
    photo_url?: string,
    firstname?: string,
    lastname?: string,
    email: string,
    role?: object,
    balance? : number
}

export default class authorizationStore {
    user: userProps;

    constructor(mainStore: MainStore) {
        this.user = {
            username: '',
            email: '',
            token: '',
            balance: 0
        }
        makeObservable(this, {
            user: observable
        })
    }

    public setUser = (user: userProps) => {
        const {token, username, email} = user;
        this.user.token = token;
        this.user.username = username;
        this.user.email = email;
    }

    public getUserToken = () => {
        return this.user.token;
    }

    public getIsAuth = () => {
        return this.user.token ? true : false;
    }

    public getUserInfo = () => {
        return this.user;
    }
}