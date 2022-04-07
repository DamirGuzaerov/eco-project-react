import React from "react";
import styles from './historyCard.module.sass'
function HistoryCard() {
    return (
        <div className={styles.historyCard}>
            <ul className={styles.infoList}>
                <li>
                    <label htmlFor="address">Адрес</label>
                    <p id="address" className={styles.historyCardInfo}>Казань, проспект Победы, 141</p>
                </li>
                <li>
                    <label htmlFor="material">Материал</label>
                    <p id="material" className={styles.historyCardInfo}>
                        <ul className={styles.materialsList}>
                            <li className={styles.materialsListElement}>
                                <span>
                                    Пластик: 1 кг
                                </span>
                            </li>
                            <li className={styles.materialsListElement}>
                                <span>
                                    Стекло: 3 кг
                                </span>
                            </li>
                            <li className={styles.materialsListElement}>
                                <span>
                                    Бумага: 5 кг
                                </span>
                            </li>
                        </ul>
                    </p>
                </li>
                <li>
                    <label htmlFor="date">Дата</label>
                    <p id="date" className={styles.historyCardInfo}>25.09.2021</p>
                </li>
            </ul>
        </div>
    );
}

export default HistoryCard;

