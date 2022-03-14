import {MainStore} from "./mainStore";
import {makeObservable, observable} from "mobx";

interface userProps{
    phone:string,
    password: string,
    patronymic: string,
    firstName: string,
    mail:string,
    token:string,
}
const usersAuthInfoMock:userProps[] = [
    {
        phone: "999999",
        password: "qwerty555",
        patronymic: "Петрович",
        firstName: "Алексей",
        mail:"ivanov@gmail.com",
        token:"",
    }
]
export default class authorizationStore {
    token:string = "";
    usersMock:userProps[];

    constructor(public mainStore:MainStore) {
        makeObservable(this, {
            token: observable,
            usersMock:observable
        })
        this.usersMock = usersAuthInfoMock;
    }

    public SetToken = (phone:string,password:string) => {
        if(this.usersMock.find(user=>user.phone === phone && user.password=== password) != null)
            this.token = this.GenerateNewToken().toString();
    }

    public GetToken = ()=>{
        return this.token;
    }

    public GetUserByToken = (token:string)=>{
        return this.usersMock.find(user=>user.token === token)
    }
    private GenerateNewToken = ()=>{
        return Math.random();
    }
}