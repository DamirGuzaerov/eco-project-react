import React, {useEffect, useState} from "react";
import styles from './userCard.module.sass'
import avatar from '../../../assets/images/img.png'
import {userProps} from "../../../stores/authorizationStore";


function UserCard({firstname, lastname, email}: userProps) {

    return (
        <div className={styles.userCard}>
            <div>
                <div className={styles.userAvatarContainer}>
                    <img src={avatar} alt="" className={styles.userCardImg}/>
                </div>
                <h2>{lastname ?? "Иванов"} {firstname ?? "Иван"}</h2>
                <div className={styles.userInfo}>
                    <p>+7 (917) 888 88 88</p>
                    <p>{email ?? "ivanov@gmail.com"}</p>
                </div>
                <button className={styles.editBtn}>Редактировать</button>
            </div>
        </div>
    );
}

export default UserCard;

