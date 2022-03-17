import {ModalTemplate} from "../modalTemplates/modalTemplate";
import defaultModalStyles from "../modal.module.sass";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useStores} from "../../../utils/hooks/use-stores";
import {observer} from "mobx-react";
import {SubmitCodeModal} from "../codeModal/сodeModal";
import {LoginModal} from "../loginModal/loginModal";

export const RegModal = observer(() => {
    const {modalStore: {addModal, removeModal}, phoneStore: {addNumber}} = useStores();
    const SignupSchema = Yup.object().shape({
        phone: Yup.string()
            .required("Введите номер телефона")
            .matches(
                /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                "Неправильный номер телефона"
            )
    });

    const openModal = (modal: any) => {
        removeModal()
        addModal(modal);
    }

    const submitNumber = (model: any, phoneNumber: string) => {
        openModal(model);
        addNumber(phoneNumber);
    }

    return(
      <ModalTemplate title={'Вход или регистрация'}>
          <div className={defaultModalStyles.modal_content}>

              <Formik initialValues={{
                  phone: '',
              }}
                       onSubmit={(values) => { console.log(values.phone, typeof values.phone);submitNumber(SubmitCodeModal, values.phone)}}
                       validationSchema={SignupSchema}
              >
                  {({ errors, touched}) =>
                      (<Form>
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

              <div className={defaultModalStyles.modal__underLinks} onClick={() => openModal(LoginModal)}>
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
});