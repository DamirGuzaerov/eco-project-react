import {observer} from "mobx-react";
import {useStores} from "../../../utils/hooks/use-stores";
import {cloneElement} from "react";
import styles from "../modal.module.sass"
import {MobileFiltersModal} from "../mobileFiltersModal/mobileFiltersModal";

export const ModalConstructor = observer(() => {
    const {
        modalStore : {currentModal: CurrentModal},
    } = useStores();

    if (CurrentModal) {
        if (CurrentModal == MobileFiltersModal) {
            // @ts-ignore
            return <div className={styles.overlay}>{cloneElement(<CurrentModal/>)}</div>
        } else {
            // @ts-ignore
            return <div className={styles.mobileFiltersOverlay}>{cloneElement(<CurrentModal/>)}</div>
        }
    }
    return null;
});