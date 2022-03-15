import {ModalTemplate} from "../modalTemplates/modalTemplate";
import defaultModalStyles from "../modal.module.sass";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";

export const RegModal = () => {
    const SignupSchema = Yup.object().shape({
        phone: Yup.string()
            .required("Введите номер телефона")
            .matches(
                /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                "Неправильный номер телефона"
            )
    });

    return(
      <ModalTemplate title={'Вход или регистрация'}>
          <div className={defaultModalStyles.modal_content}>

              <Formik  initialValues={{
                  phone: '',
              }}
                       onSubmit={values => {
                           console.log(values)}}
                       validationSchema={SignupSchema}
              >
                  {({ errors, touched}) =>
                      (<Form >
                          <div className={defaultModalStyles.modal__form_container}>
                              <Field name="phone" placeholder={'Телефон'}/>
                              {touched.phone && errors.phone ? (
                                  <p className={defaultModalStyles.error_message}>{errors.phone}</p>
                              ) : null}
                              <button type="submit" className={defaultModalStyles.modal__sendButton}>
                                  <p>Получить код</p>
                              </button>
                          </div>
                      </Form>)}
              </Formik>

              <div className={defaultModalStyles.modal__underLinks}>
                  <button>
                      Я уже зарегистрировался(-ась)
                  </button>
              </div>
              <button className={defaultModalStyles.modal__enterForPartnersButton}>
                  Вход для партнёров
              </button>
          </div>
      </ModalTemplate>
    );
}