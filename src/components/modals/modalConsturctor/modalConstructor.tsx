import {observer} from "mobx-react";
import {useStores} from "../../../utils/hooks/use-stores";
import {cloneElement} from "react";

export const ModalConstructor = observer(() => {
    const {
        modalStore : {currentModal: CurrentModal},
    } = useStores();

    if (CurrentModal) {
        // @ts-ignore
        return cloneElement(<CurrentModal/>)
    }
    return null;
});