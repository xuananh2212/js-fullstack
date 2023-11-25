"use client"
import { useTranslation } from 'react-i18next';
import keyWord from '../../../public/assets/keyword/keyword.json';
import clsx from "clsx"
import styles from './Hobbies.module.scss';
export default function Hobbies() {
     const { t } = useTranslation();
     return (
          <div className={clsx(styles.hobbies)}>
               <h2 className={styles.headingLv2}>{t(keyWord.hobbies)}</h2>
               <ul className={clsx(styles.listHobbies)}>
                    <li>{t(keyWord.hobbies1)}</li>
                    <li>{t(keyWord.hobbies2)}</li>
                    <li>{t(keyWord.hobbies3)}</li>
               </ul>

          </div>
     )
}
