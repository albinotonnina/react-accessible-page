import React from 'react';
import styles from './styles/RestaurantList.scss'

export default function () {
    return (
        <section  className={styles.container} tabIndex="1">
            <h1 className={styles.title}>Restaurants available in [ZONE]</h1>

         <ol className={styles.ol}>
             <li className={styles.item}>
                 <h2 className={styles.item_title}>Papadopulous</h2>

                <dl className={styles.dl}>
                    <dt className={styles.dt}>Cuisine</dt>
                    <dd className={styles.dd}>Greek</dd>

                    <dt className={styles.dt}>Price range</dt>
                    <dd className={`${styles.dd} ${styles.dtPrice}`}>££</dd>

                    <dt className={styles.dt}>Delivery time</dt>
                    <dd className={styles.dd}>30 minutes</dd>
                </dl>

                 <div>
                     <button className={styles.caret} />
                 </div>
             </li>

             <li className={styles.item}>
                 <h2 className={styles.item_title}>Tapas Bravas</h2>

                 <dl className={styles.dl}>
                     <dt className={styles.dt}>Cuisine</dt>
                     <dd className={styles.dd}>Spanish</dd>

                     <dt className={styles.dt}>Price range</dt>
                     <dd className={`${styles.dd} ${styles.dtPrice}`}>£££</dd>

                     <dt className={styles.dt}>Delivery time</dt>
                     <dd className={styles.dd}>15 minutes</dd>
                 </dl>

                 <div>
                     <button className={styles.caret} />
                 </div>
             </li>
         </ol>
        </section>
    )
}


