import styles from "./nonauthlayout.module.sass";
import Header from "../header/header";
import React from "react";
import Footer from "../footer/footer";
import {Outlet} from "react-router-dom";

export const NonAuthLayout = () => {
    return(
        <div className={styles.page}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}