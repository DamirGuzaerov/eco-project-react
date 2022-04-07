import {makeObservable, observable} from "mobx";
import {MainStore} from "./mainStore";

type filter = {
    id: string;
    flag: boolean;
}

type filterProps<T> = Exclude<T, null | undefined>;

export default class FilterStore {
    filters: filterProps<filter>[];

    constructor(mainStore: MainStore) {
        this.filters = [
            {
                id: 'man',
                flag: false
            },
            {
                id: 'women',
                flag: false
            },
            {
                id: 'allWear',
                flag: false
            },
            {
                id: 'shoes',
                flag: false
            },
            {
                id: 'suit',
                flag: false
            }, {
                id: 'accs',
                flag: false
            },
            {
                id: 'nike',
                flag: false
            },
            {
                id: 'adidas',
                flag: false
            },
            {
                id: 'rebook',
                flag: false
            },
            {
                id: 'pw',
                flag: false
            },
            {
                id: 'samara',
                flag: false
            },
            {
                id: 'allBrands',
                flag: false
            }
        ];

        makeObservable(this, {
            filters: observable
        })
    }

    addFilter = (filter: filterProps<filter>) => {
        this.filters = [...this.filters, filter];
    }

    setFlag = (id: string) => {
        const arrayWear = ['shoes', 'suit', 'accs'];
        const arrayBrands = ['samara', 'pw', 'rebook', 'adidas', 'nike'];

        if (id == 'allWear' || id == 'allBrands') {
            const objIndex = this.filters.findIndex((item => item.id == id));
            this.filters[objIndex].flag = !this.filters[objIndex].flag;

            const all = this.filters[objIndex].flag;
            if(id == 'allWear') {
                arrayWear.forEach((type) => {
                    const itemIndex = this.filters.findIndex((item => item.id == type));
                    this.filters[itemIndex].flag = all;
                })
            } else {
                arrayBrands.forEach((type) => {
                    const itemIndex = this.filters.findIndex((item => item.id == type));
                    this.filters[itemIndex].flag = all;
                })
            }
        } else {
            console.log(id)
            // @ts-ignore
            this.filters.find(item => item.id === id).flag = !this.filters.find(item => item.id === id).flag;
            console.log(this.filters.find(item => item.id === id));
        }
    }

    getFilters = () => {
        return this.filters;
    }

    getFlagByID = (id: string) => {
        if (this.filters.find(item => item.id === id) != null) {
            return this.filters.find(item => item.id === id);
        } else {
            return [{id: id, flag: false}]
        }
    }

}