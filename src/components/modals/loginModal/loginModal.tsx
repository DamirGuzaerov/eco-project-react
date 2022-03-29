import defaultModalStyles from './../modal.module.sass';
import {useNavigate} from "react-router-dom";
import {Formik, Form, Field, getIn, FormikValues, FormikErrors, FormikTouched} from 'formik';
import * as Yup from 'yup';
import {getErrorStyle, ModalTemplate} from "../modalTemplates/modalTemplate";
import {useStores} from "../../../utils/hooks/use-stores";
import {observer} from "mobx-react";
import {RegModal} from "../regModal/regModal";
import {PartnersRegModal} from "../partnersRegModal/partnersRegModal";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import {useEffect, useState} from "react";
import {Loader} from "../../ui/loader/loader";


export const LoginModal = observer(() => {
    const {
        modalStore: {addModal, removeModal},
        authorizationStore: {setUser, getUserToken, getIsAuth}
    } = useStores();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const goToProfile = () => navigate('/profile');

    const SignupSchema = Yup.object().shape({
        phone: Yup.string()
            .required("Введите номер телефона")
            // .matches(
            //     /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
            //     "Неправильный номер телефона"
            // ),
        ,
        password: Yup.string()
            .required("Введите пароль")
            .min(4, "Минимальное количество знаков - 4"),
    });

    useEffect(() => {
        if(getIsAuth()) {
            goToProfile();
        }
    }, [])

    const onSubmit = (phone: string, password: string) => {
        setIsLoading(true);
        axios.post('/login', {
            login: phone,
            password: password
        }).then((r) => {
            setUser({token: r.data.token, username: r.data.username, email: r.data.email})
            setIsLoading(false);
            removeModal();
            goToProfile();
        }).catch((error) => {
            console.log('something went wrong', error);
            setIsLoading(false);
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
                                </button>): <Loader/>}
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