import {FC, useEffect, useState} from "react";
import styles from './subFilterStyles.module.sass'
import {FilterCheckbox} from "../../ui/filtersCheckbox/filterCheckbox";
import {filterSettings} from "../filter";
import {observer} from "mobx-react";
import {useStores} from "../../../utils/hooks/use-stores";

interface props {
    name: string,
    buttonsName: filterSettings[],
}

export const SubFilter: FC<props> = observer(({name, buttonsName}) => {
    const [filters, setFilters] = useState(buttonsName);
     const {filterStore: {getFilters, setFlag}} = useStores()
    useEffect(() => {
        console.log('useeff')
    }, [filters])


    return (
        <div className={styles.subfilter_container}>
            <h3>{name}</h3>
            {buttonsName.map(e => {
                return (<FilterCheckbox id={e.id} flag={e.flag} key={e.id} name={e.name}/>);
            })}
        </div>
    )
})