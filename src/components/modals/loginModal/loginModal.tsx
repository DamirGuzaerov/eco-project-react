import defaultModalStyles from './../modal.module.sass';
import Icon from "../../ui/icon/icon";
import {useRef, useState} from "react";
import {useModalClose} from "../../../utils/hooks/close-modal-hook";

export const LoginModal = () => {
    const ref = useRef();

    return(
        <div className={defaultModalStyles.modal__container}>
            <div className={defaultModalStyles.modal__firstrow}>
                <h2>Вход</h2>
                <button className={defaultModalStyles.modal__closeButton}>
                    <Icon name={'closeButton'} width={18} height={18}/>
                </button>
            </div>

            <div className={defaultModalStyles.modal_content}>
                <form className={defaultModalStyles.modal__form_container}>
                    <input placeholder={'Телефон'} type={'tel'}/>
                    <input placeholder={'Пароль'} type={'password'}/>
                    <button>
                        send
                    </button>
                </form>
            </div>
        </div>
    )
}