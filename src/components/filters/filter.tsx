import styles from './filterStyles.module.sass'
import {SubFilter} from "./subFilter/subFilter";
export interface filterSettings {
    name: string,
    id: string,
    flag: boolean
}
export const Filter = () => {
    return(
      <div className={styles.filter__container}>
          <SubFilter name={'Пол'} buttonsName={[{name: 'Мужской', id: 'man', flag: false}, {name: 'Женский', id: 'women', flag: false}]}/>
          <SubFilter name={'Тип товара'} buttonsName={[{name: 'Выбрать все', id: 'allWear', flag: false}, {name: 'Обувь', id: 'shoes', flag: false}, {name: 'Одежда', id: 'suit', flag: false}, {name: 'Аксессуары', id: 'accs', flag: false}]}/>
          <SubFilter name={'Брэнд'} buttonsName={[{name: 'Выбрать все', id: 'allBrands', flag: false}, {name: 'Nike', id: 'nike', flag: false}, {name: 'Adidas', id: 'adidas', flag: false}, {name: 'Rebook', id: 'rebook', flag: false}, {name: 'P&W', id: 'pw', flag: false}, {name: 'Самарский трикотаж', id: 'samara', flag: false}]}/>
      </div>
    );
}