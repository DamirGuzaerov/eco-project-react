import defaultModalStyles from './../modal.module.sass';
import Icon from "../../ui/icon/icon";
import {Link, useNavigate} from "react-router-dom";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {ModalTemplate} from "../modalTemplates/modalTemplate";
import {useStores} from "../../../utils/hooks/use-stores";
import {observer} from "mobx-react";
import {RegModal} from "../regModal/regModal";
import {PartnersRegModal} from "../partnersRegModal/partnersRegModal";


export const PartnersLoginModal = observer(() => {
    const {modalStore: {addModal, removeModal}}=useStores();

    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .required("Введите номер телефона")
            .matches(
                /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                "Неправильный номер телефона"
            ),
        password: Yup.string()
            .required("Введите пароль")
            .min(4, "Минимальное количество знаков - 4"),
    });

    const openModal = (modal: any) => {
        removeModal()
        addModal(modal);
    }

    return(
        <ModalTemplate title={'Вход'}>
                <div className={defaultModalStyles.modal_content}>
                    <Formik  initialValues={{
                        email: '',
                        password: '',
                    }}
                             validationSchema={SignupSchema}
                             onSubmit={values => alert(values)}
                    >
                        {({ errors, touched}) =>
                            (<Form >
                                <div className={defaultModalStyles.modal__form_container}>
                                    <Field name="email" placeholder={'Email'}/>
                                    {touched.email && errors.email? (
                                        <p className={defaultModalStyles.error_message}>{errors.email}</p>
                                    ) : null}
                                    <Field name="password" placeholder={'Пароль'} type={'password'}/>
                                    {touched.password && errors.password ? (
                                        <p className={defaultModalStyles.error_message}>{errors.password}</p>
                                    ) : null}
                                    <button type="submit" className={defaultModalStyles.modal__sendButton}>
                                        <p>Получить код</p>
                                    </button>
                                </div>
                            </Form>)}
                    </Formik>

                    <div className={defaultModalStyles.modal__underLinks}>
                        <button onClick={() => openModal(RegModal)}>
                            Войти с помощью смс
                        </button>
                        <button onClick={() => openModal(PartnersRegModal)}>
                            Регистрация
                        </button>
                    </div>
                </div>
        </ModalTemplate>
    )});