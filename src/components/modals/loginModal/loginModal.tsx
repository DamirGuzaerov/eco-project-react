import defaultModalStyles from './../modal.module.sass';
import {Link, useNavigate} from "react-router-dom";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {getErrorStyle, ModalTemplate} from "../modalTemplates/modalTemplate";
import {useStores} from "../../../utils/hooks/use-stores";
import {observer} from "mobx-react";
import {RegModal} from "../regModal/regModal";
import {PartnersRegModal} from "../partnersRegModal/partnersRegModal";
import axios from "axios";
import {useEffect, useState} from "react";
import {Loader} from "../../ui/loader/loader";
import header from "../../header/header";

const SignupSchema = Yup.object().shape({
    phone: Yup.string()
        .required("Введите номер телефона")
        .matches(
            /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
            "Неправильный номер телефона"
        )
    ,
    password: Yup.string()
        .required("Введите пароль")
        .min(4, "Минимальное количество знаков - 4"),
});

export const LoginModal = observer(() => {
    const {
        modalStore: {addModal, removeModal},
        authorizationStore: {setUser, getIsAuth}
    } = useStores();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const goToProfile = () => navigate('/profile/promo_codes');

    useEffect(() => {
        if (getIsAuth()) {
            goToProfile();
        }
    }, [])

    const onSubmit = (phone: string, password: string) => {
        setIsLoading(true);
        axios.post('/login', {
            login: phone,
            password: password,
        }).then((r) => {
            setUser({token: r.data.token, id: r.data.id, username: r.data.username, email: r.data.email})
            setIsLoading(false);
            localStorage.setItem('token', r.data.token);
            removeModal();
            goToProfile();
        }).catch((error) => {
            setIsLoading(false);
            setIsError(true);
        })
    }

    const openModal = (modal: any) => {
        removeModal()
        addModal(modal);
    }

    return (
        <ModalTemplate title={'Вход'}>
            <div className={defaultModalStyles.modal_content}>
                <Formik initialValues={{
                    phone: '',
                    password: '',
                }}
                        validationSchema={SignupSchema}
                        onSubmit={values => onSubmit(values.phone, values.password)}
                >
                    {({errors, touched}) =>
                        (<Form>
                            <div className={defaultModalStyles.modal__form_container}>
                                <Field name="phone" placeholder={'Телефон'}
                                       style={getErrorStyle(errors, touched.phone, "phone")}/>
                                {touched.phone && errors.phone ? (
                                    <p className={defaultModalStyles.error_message}>{errors.phone}</p>
                                ) : null}
                                <Field name="password" placeholder={'Пароль'} type={'password'}
                                       style={getErrorStyle(errors, touched.password, "password")}/>
                                {touched.password && errors.password ? (
                                    <p className={defaultModalStyles.error_message}>{errors.password}</p>
                                ) : null}
                                {!isLoading ? (<button type="submit" className={defaultModalStyles.modal__sendButton}>
                                    <p>Войти</p>
                                </button>) : <Loader/>}
                                {isError ? <p className={defaultModalStyles.error_message}>Неправильный логин или пароль</p> : null}
                            </div>
                        </Form>)}
                </Formik>

                <div className={defaultModalStyles.modal__underLinks}>
                    <button onClick={() => openModal(RegModal)}>
                        Войти с помощью смс
                    </button>
                    <button onClick={() => openModal(RegModal)}>
                        Регистрация
                    </button>
                </div>
                <button className={defaultModalStyles.modal__enterForPartnersButton}
                        onClick={() => openModal(PartnersRegModal)}>
                    Вход для партнёров
                </button>
            </div>
        </ModalTemplate>
    )
});