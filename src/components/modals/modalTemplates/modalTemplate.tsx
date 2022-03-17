import styles from '../modal.module.sass';
import {FC, MutableRefObject, useRef} from "react";
import {useModalClose} from "../../../utils/hooks/close-modal-hook";
import {Portal} from '../../portal/Portal';
import {observer} from "mobx-react";
import {useStores} from "../../../utils/hooks/use-stores";
import defaultModalStyles from "../modal.module.sass";
import Icon from "../../ui/icon/icon";


export interface IModal {
    children: any
    title: string
}

export const ModalTemplate:FC<IModal> = observer(({children, title}: IModal) => {
    const ref = useRef() as MutableRefObject<HTMLInputElement>;
    const {modalStore: {removeModal}} = useStores();

    useModalClose(ref, () => removeModal());

    const closeModal = () => {
        removeModal();
    }

    return (
        <Portal elem={'elem'} role={'loginModal'} className={'portal-root'}>
            <div className={styles.modalOverlay} ref={ref}>
                <div className={defaultModalStyles.modal__container}>
                    <div className={defaultModalStyles.modal__firstrow}>
                        <h2>{title}</h2>
                        <button className={defaultModalStyles.modal__closeButton} onClick={() => closeModal()}>
                            <Icon name={'closeButton'} width={18} height={18}/>
                        </button>
                    </div>
                        {children}
                </div>
            </div>
        </Portal>
    );
});
