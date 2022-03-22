import defaultModalStyles from './../modal.module.sass';
import Icon from "../../ui/icon/icon";
import {Link, useNavigate} from "react-router-dom";
import {Formik, Form, Field, getIn} from 'formik';
import * as Yup from 'yup';
import {getErrorStyle, ModalTemplate} from "../modalTemplates/modalTemplate";
import {useStores} from "../../../utils/hooks/use-stores";
import {observer} from "mobx-react";
import {RegModal} from "../regModal/regModal";
import {PartnersLoginModal} from "../partnersLoginModal/partnersLoginModal";


export const PartnersRegModal = observer(() => {
    const {modalStore: {addModal, removeModal},
            authorizationStore: {GetToken,SetToken}} = useStores();
    const navigate = useNavigate();
    const goToProfile = () => navigate('/profile');


    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .required("Введите номер телефона")
            .email("Неправильынй формат"),
        partnerName:Yup.string()
            .required("Введите наименование организации")
            .min(4,"Минимальное количество знаков - 4"),
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
                        partnerName:'',
                        email: '',
                        password: '',
                    }}
                             validationSchema={SignupSchema}
                             onSubmit={values => alert(values)}
                    >
                        {({ errors, touched}) =>
                            (<Form >
                                <div className={defaultModalStyles.modal__form_container}>
                                    <Field name="partnerName" placeholder={'Наименование организации'} style={getErrorStyle(errors,touched.partnerName, 'partnerName')}/>
                                    {touched.partnerName && errors.partnerName ? (
                                        <p className={defaultModalStyles.error_message}>{errors.partnerName}</p>
                                    ) : null}
                                    <Field name="email" placeholder={'Email'} style={getErrorStyle(errors,touched.email, 'email')}/>
                                    {touched.email && errors.email? (
                                        <p className={defaultModalStyles.error_message}>{errors.email}</p>
                                    ) : null}
                                    <Field name="password" placeholder={'Пароль'} type={'password'} style={getErrorStyle(errors,touched.password, 'password')}/>
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
                        <button onClick={() => openModal(PartnersLoginModal)}>
                            Я уже зарегестрировался(-ась)
                        </button>
                    </div>
                    <button className={defaultModalStyles.modal__enterForPartnersButton} onClick={() => openModal(PartnersLoginModal)}>
                        Вход для партнёров
                    </button>
                </div>
        </ModalTemplate>
    )});