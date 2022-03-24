import styles from './filterStyles.module.sass'
import {SubFilter} from "./subFilter/subFilter";

export const Filter = () => {
    return(
      <div className={styles.filter__container}>
          <SubFilter name={'Пол'} buttonsName={['Мужской', 'Женский']}/>
          <SubFilter name={'Тип товара'} buttonsName={['Выбрать все', 'Обувь', 'Одежда', 'Аксессуары']}/>
          <SubFilter name={'Брэнд'} buttonsName={['Выбрать все', 'Nik3', 'Abibas', 'Rebok', 'M$H', 'Самарский трикотаж']}/>
      </div>
    );
}