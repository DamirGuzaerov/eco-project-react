import {FC, useEffect, useState} from "react";
import styles from './filterCheckbox.module.sass';
import './filterCheckbox.module.sass';
import Icon from "../icon/icon";
import {observer} from "mobx-react";
import {useStores} from "../../../utils/hooks/use-stores";

interface filterCheckboxProps {
    name: string,
    flag: boolean,
    id: string
}

export const FilterCheckbox: FC<filterCheckboxProps> = observer(({name, flag, id}) => {
    const {filterStore: {getFlagByID, setFlag}} = useStores();

    // @ts-ignore
    const [isChecked] = useState<filterCheckboxProps>(getFlagByID(id));


    const onCheck = () => {
        setFlag(id);
    }

    return (
        <div className={styles.checkboxWithName}>
            <label className={styles.checkbox_wrapper}>
                <input type={'checkbox'} onChange={onCheck}/>
                <span className={`${styles.checkbox} ${isChecked.flag ? styles.checkbox_active : 'checkboxDisabled'}`}>
                    <Icon name={'checkbox_svg'} width={12} height={9}/>
                </span>
            </label>
            <p className={`${styles.default_name} ${isChecked.flag ? styles.active_name : 'disabledName'}`}>{name}</p>
        </div>
    )
});