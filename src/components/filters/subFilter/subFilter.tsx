import {FC} from "react";
import styles from './subFilterStyles.module.sass'
import {FilterCheckbox} from "../../ui/filtersCheckbox/filterCheckbox";

interface props {
    name: string,
    buttonsName: string[],
}

export const SubFilter: FC<props> = ({name, buttonsName}) => {
    return(
        <div className={styles.subfilter_container}>
            <h3>{name}</h3>
            {buttonsName.map(e => {
                return(<FilterCheckbox key={e} name={e} onChange={console.log}/>);
            })}
        </div>
    )
}