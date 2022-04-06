import React, {useEffect} from "react";
import styles from './profile.module.sass';
import UserCard from "../../components/ui/userCard/userCard";
import HistoryCard from "../../components/ui/historyCard/historyCard";
import {observer} from "mobx-react";

export const Profile = observer(() => {
    return (
        <div className={styles.profile_container}>
            <h1 className={styles.profile_title}>Личный кабинет</h1>
            <div className={styles.mainContentWrapper}>
                <div className={styles.userCardWrapper}>
                    <UserCard/>
                </div>
                <ul className={styles.infoCardsList}>
                    <li className={styles.infoCardItem}>
                        <HistoryCard/>
                    </li>
                    <li className={styles.infoCardItem}>
                        <HistoryCard/>
                    </li>
                </ul>
            </div>
        </div>
    );
});


