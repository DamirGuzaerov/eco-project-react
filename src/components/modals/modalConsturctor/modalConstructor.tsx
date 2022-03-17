import {observer} from "mobx-react";
import {useStores} from "../../../utils/hooks/use-stores";
import {cloneElement} from "react";
import styles from "../modal.module.sass"

export const ModalConstructor = observer(() => {
    const {
        modalStore : {currentModal: CurrentModal},
    } = useStores();

    if (CurrentModal) {
        // @ts-ignore
        return <div className={styles.overlay}>{cloneElement(<CurrentModal/>)}</div>
    }
    return null;
});