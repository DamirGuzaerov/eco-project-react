import {FC, useState} from "react";
import {inspect} from "util";
import styles from './filterCheckbox.module.sass';
import  './filterCheckbox.module.sass';
import Icon from "../icon/icon";

interface name {
    name: string
}
export const FilterCheckbox:FC<name> = ({name}) => {
    const [isChecked, setIsChecked] = useState(false);
    return(
        <div className={styles.checkboxWithName}>
            <label className={styles.checkbox_wrapper}>
                <input type={'checkbox'} onChange={() => setIsChecked(!isChecked)}/>
                <span className={`${styles.checkbox} ${isChecked ? styles.checkbox_active : 'checkboxDisabled'}`}>
                    <Icon name={'checkbox_svg'} width={12} height={9}/>
                </span>
            </label>
            <p className={`${styles.default_name} ${isChecked ? styles.active_name: 'disabledName'}`}>{name}</p>
        </div>
    )
}