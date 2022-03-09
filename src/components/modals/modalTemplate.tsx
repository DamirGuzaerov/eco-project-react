import styles from './modal.module.sass';
import {FC, useRef} from "react";
import {useModalClose} from "../../utils/hooks/close-modal-hook";
import {Portal} from '../portal/Portal';


export interface IModal {
    visible: boolean,
    onClose: Function,
    children: any
}

export const ModalTemplate:FC<IModal> = ({visible, onClose, children}: IModal) => {
    const ref = useRef();
    useModalClose(ref, () => onClose);

    const onCloseModal = (event: any) => {
        if(event.target.className === styles.overlay) {
            onClose();
        }
    }

    if(!visible) return null

    return (
        <Portal elem={'elem'} role={'loginModal'} className={'portal-root'}>
            <div className={styles.overlay} onClick={(event) => onCloseModal(event)}>
                {children}
            </div>
        </Portal>
    );
};
