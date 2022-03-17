import {ModalTemplate} from "../modalTemplates/modalTemplate";
import defaultModalStyles from "../modal.module.sass";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {FC} from "react";
import {observer} from "mobx-react";
import {useStores} from "../../../utils/hooks/use-stores";
import styles from './codeModal.module.sass';
import {RegModal} from "../regModal/regModal";

export interface props {
    phone: string
}
export const CodeModal = observer( ()=> {
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
        <ModalTemplate title={'Ввести код'}>
            <div className={defaultModalStyles.modal_content}>

                <Formik initialValues={{
                    code: '',
                }}
                        onSubmit={values => {
                            console.log(values)
                        }}
                        validationSchema={SignupSchema}
                >
                    {({errors, touched}) =>
                        (<Form>
                            <div className={defaultModalStyles.modal__form_container}>
                                <div className={styles.codeModal__phone_number_container}>
                                    <p>Введите код отправленный вам на телефон</p>
                                    <p className={styles.codeModal__phone_number}>{number}</p>
                                </div>

                                <Field name="code" placeholder={'Код'}/>
                                {touched.code && errors.code ? (
                                    <p className={defaultModalStyles.error_message}>{errors.code}</p>
                                ) : null}
                                <button type="submit" className={defaultModalStyles.modal__sendButton}>
                                    <p>Отправить</p>
                                </button>
                            </div>
                        </Form>)}
                </Formik>

                <div className={defaultModalStyles.modal__underLinks}>
                    <button onClick={() => openModal(RegModal)}>
                        Не получил(-а) код
                    </button>
                </div>
                <button className={defaultModalStyles.modal__enterForPartnersButton}>
                    Вход для партнёров
                </button>
            </div>
        </ModalTemplate>
    );
});