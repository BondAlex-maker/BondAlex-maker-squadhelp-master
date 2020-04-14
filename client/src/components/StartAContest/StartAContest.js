import React from "react";
import styles from "./StartAContest.module.sass";




const StartAContest = () => {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.cardContainer}>
    <span className={styles.cardRowSpan}>
    <span className={styles.textWhite}>Ready to get started? Launch a contest and start receiving submissions instantly.</span>
    <span className={styles.spanBtn}><a className={styles.aBtn} href="/start-contest">
        <i className="fal fa-lightbulb"></i>
        start a contest
    </a></span>
    </span>
            </div>

        </div>
    )
}

export default StartAContest;