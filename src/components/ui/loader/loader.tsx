import styles from './loader.module.sass';


export const Loader = () => {
    return (
        <div className={styles.loader_wrapper}>
            <div className={styles.loader}>
            </div>
        </div>
    );
}