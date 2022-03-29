import {FC, useState} from "react";
import styles from './subFilterStyles.module.sass'
import {FilterCheckbox} from "../../ui/filtersCheckbox/filterCheckbox";
import {filterSettings} from "../filter";

interface props {
    name: string,
    buttonsName: filterSettings[],
}

export const SubFilter: FC<props> = ({name, buttonsName}) => {
    const [filters, setFilters] = useState(buttonsName);

    const changeFlag = (entity: filterSettings) => {
        if(entity.id == 'all') {
            filters.forEach(e => e.flag = entity.flag);
            console.log(filters);
        } else {
            // @ts-ignore
            filters.find(item => item.id === entity.id).flag = !filters.find(item => item.id === entity.id).flag;
            console.log(filters, filters.find(item => item.id === entity.id));
        }
    }
    return(
        <div className={styles.subfilter_container}>
            <h3>{name}</h3>
            {buttonsName.map(e => {
                return(<FilterCheckbox flag={e.flag} key={e.id} name={e.name} onChange={() => changeFlag(e)}/>);
            })}
        </div>
    )
}