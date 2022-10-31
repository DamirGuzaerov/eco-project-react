import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import styles from './portal.module.sass';
interface Portal {
    elem: string,
    role: string,
    children: any
}
export const Portal = ({elem = 'div', children}: Portal) => {
    const [container] = useState(document.createElement(elem));

    container.classList.add(styles.portal_root);
    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        }
    }, []);
    return createPortal(children, container);
};