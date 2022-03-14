import styles from './modal.module.sass';
import {FC, MutableRefObject, useRef} from "react";
import {useModalClose} from "../../utils/hooks/close-modal-hook";
import {Portal} from '../portal/Portal';
import {observer} from "mobx-react";
import {useStores} from "../../utils/hooks/use-stores";


export interface IModal {
    children: any
}

export const ModalTemplate:FC<IModal> = observer(({children}: IModal) => {
    const ref = useRef() as MutableRefObject<HTMLInputElement>;
    const {modalStore: {removeModal}} = useStores();

    useModalClose(ref, () => removeModal());

    return (
        <Portal elem={'elem'} role={'loginModal'} className={'portal-root'}>
            <div className={styles.overlay} ref={ref}>
                {children}
            </div>
        </Portal>
    );
});
