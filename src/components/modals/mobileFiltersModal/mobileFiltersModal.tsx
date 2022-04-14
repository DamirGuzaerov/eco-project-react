import {useState} from "react";
import styles from './mobileFiltersModal.module.sass'
import {useStores} from "../../../utils/hooks/use-stores";
import {Filter} from "../../filters/filter";

export const MobileFiltersModal = () => {

    const {
        modalStore: {removeModal, addModal}
    } = useStores();

    const filtersRequest = () => {
        removeModal();
    }


    return (
        <div className={styles.modal}>
           <div className={styles.modal_container}>
                <button className={styles.modal_close} onClick={() => removeModal()}>

                </button>

               <Filter/>

               <button className={styles.button_submit} onClick={() => filtersRequest()}>
                   Применить
               </button>

               <button className={styles.button_remove}>
                   Сбросить фильтры
               </button>
           </div>
        </div>
    )
}