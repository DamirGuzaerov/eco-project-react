import defaultModalStyles from './../modal.module.sass';
import Icon from "../../ui/icon/icon";
import {Link} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik';
import * as Yup from 'yup';

export const LoginModal = (setVisible: Function) => {

    const SignupSchema = Yup.object().shape({
        phone: Yup.string()
            .required("Введите номер телефона")
            .matches(
                /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
                "Неправильный номер телефона"
            ),
        password: Yup.string()
            .required("Введите пароль")
            .min(4, "Минимальное количество знаков - 4"),
    });

    return(
        <div className={defaultModalStyles.modal__container}>
            <div className={defaultModalStyles.modal__firstrow}>
                <h2>Вход</h2>
                <button className={defaultModalStyles.modal__closeButton} onClick={() => setVisible()}>
                    <Icon name={'closeButton'} width={18} height={18}/>
                </button>
            </div>

            <div className={defaultModalStyles.modal_content}>

                <Formik  initialValues={{
                    phone: '',
                    password: '',
                }}
                         validationSchema={SignupSchema}
                         onSubmit={values => {
                             console.log(values)}}
                >
                    {({ errors, touched}) =>
                        (<Form>
                            <div className={defaultModalStyles.modal__form_container}>
                                <Field name="phone"/>
                                <Field name="password" />
                                <button type="submit" className={defaultModalStyles.modal__sendButton}>
                                    <p>Войти</p>
                                </button>
                                {touched.phone && errors.phone ? (
                                    <div>{errors.phone}</div>
                                ) : null}
                                {touched.password && errors.password ? (
                                    <div>{errors.password}</div>
                                ) : null}
                            </div>
                        </Form>)}
                </Formik>

                <div className={defaultModalStyles.modal__underLinks}>
                    <Link to={''}>
                        Войти с помощью смс
                    </Link>
                    <Link to={''}>
                        Регистрация
                    </Link>
                </div>
                <button className={defaultModalStyles.modal__enterForPartnersButton}>
                    Вход для партнёров
                </button>
            </div>
        </div>
    )
}