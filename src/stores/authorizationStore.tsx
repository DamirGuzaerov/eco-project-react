import {MainStore} from "./mainStore";
import {makeObservable, observable} from "mobx";
import axios from "axios";

interface userProps{
    token: string,
    id?: string,
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
            user: observable,
        })
    }

    public setUser = (user: userProps) => {
        this.user = {...user};
        console.log(this.user);
        window.localStorage.setItem("user",JSON.stringify(this.user))
        document.cookie = `auth_token=${this.user.token}`
    }

    public getUserToken = () => {
        return getCookie("auth_token");
    }

    public getIsAuth = () => {
        return !!getCookie("auth_token");
    }

    public getUserInfo = () => {
        if(this.user.id==null){
            this.user = JSON.parse(window.localStorage.getItem("user")!);
        }
        return this.user;
    }

    private requestUserInfo() {
        axios.get(`/profile/${JSON.parse(window.localStorage.getItem("user")!).id}`).then((r) => {
            this.user = r.data
        }).catch((e) => {
            console.log(e);
        })
    }
}

function getCookie(name:string) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}