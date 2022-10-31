import React, {useEffect, useState} from "react";
import styles from './profile.module.sass';
import UserCard from "../../components/ui/userCard/userCard";
import {observer} from "mobx-react";
import CardsListSwitcher from "../../components/cardsListSwitcher/cardsListSwitcher";
import {useStores} from "../../utils/hooks/use-stores";
import {userProps} from "../../stores/authorizationStore";

export const Profile = observer(() => {
    const [user,setUser] = useState<userProps>()

    const {
        authorizationStore: {getUserInfo}
    } = useStores();

    useEffect(()=>{
        setUser(getUserInfo())
    },[])
    return (
        <div className={styles.profile_container}>
            <h1 className={styles.profile_title}>Личный кабинет</h1>
            <div className={styles.mainContentWrapper}>
                <div className={styles.userCardWrapper}>
                    <UserCard email={user?.email!}
                              token={user?.token!}
                              username={user?.username!}
                              firstname={user?.firstname}
                              lastname={user?.lastname}
                    />
                </div>
                <CardsListSwitcher/>
            </div>
        </div>
    );
});


