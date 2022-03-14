import React from "react";
import styles from './userCard.module.sass'
import avatar from '../../../assets/images/img.png'
function UserCard() {
    return (
        <div className={styles.userCard}>
            <div className={styles.userAvatarContainer}>
                <img src={avatar} alt="" className={styles.userCardImg}/>
            </div>
            <h2>Алексей Петрович</h2>
            <div className={styles.userInfo}>
                <p>+7 (917) 888 88 88</p>
                <p>ivanov@gmail.com</p>
            </div>
            <button className={styles.editBtn}>Редактировать</button>
        </div>
    );
}

export default UserCard;

