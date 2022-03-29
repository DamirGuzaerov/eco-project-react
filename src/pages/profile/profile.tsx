import React, {useEffect} from "react";
import styles from './profile.module.sass';
import UserCard from "../../components/ui/userCard/userCard";
import HistoryCard from "../../components/ui/historyCard/historyCard";
import {observer} from "mobx-react";
import {useStores} from "../../utils/hooks/use-stores";
import {useNavigate} from "react-router-dom";


export const Profile = observer(() => {
    const {
        authorizationStore: {getIsAuth, getUserInfo}
    } = useStores();

    const navigate = useNavigate();


    useEffect(() => {
        if(!getIsAuth()) {
            navigate('/')
        }
    })
    return (
        <div className={styles.profile_container}>
            <UserCard/>
            <HistoryCard/>
        </div>
    );
});


