import {getErrorStyle, ModalTemplate} from "../modalTemplates/modalTemplate";
import defaultModalStyles from "../modal.module.sass";
import * as Yup from "yup";
import {observer} from "mobx-react";
import {useStores} from "../../../utils/hooks/use-stores";
import styles from './promoCode.module.sass';
import qrCode from '../../../assets/images/qrCode.svg'

export const PromoCodeModal = observer( () => {

    const {phoneStore: {getNumber},
            modalStore: {removeModal, addModal}} = useStores();
    const number = getNumber();
    const SignupSchema = Yup.object().shape({
        code: Yup.string()
            .required("Введите действительный код")
            .matches(
                /^[0-4]*$/,
                "Введите действительный код"
            )
    });

    const openModal = (modal: any) => {
        removeModal()
        addModal(modal);
    }

    return (
        <ModalTemplate title={'QR-код на покупку создан'}>
            <div className={defaultModalStyles.modal_content}>
                <div className={defaultModalStyles.modal__subtitle}>
                    При оплате покажите его сотруднику на кассе
                </div>
                <img src={qrCode} alt=""/>
                <h1 className={styles.promoCode}>E25GHR0P</h1>
                <div className={defaultModalStyles.modal__subtitle}>
                    Если не получается отсканировать QR-код, введите код вручную или продиктуйте сотриднику на кассе
                </div>
                <button className={defaultModalStyles.modal__sendButton} onClick={removeModal}>
                    Закрыть
                </button>
            </div>
        </ModalTemplate>
    );
});