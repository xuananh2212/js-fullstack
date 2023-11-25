'use client';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import translationVie from '../../../public/assets/vi/translation.json';
import translationEn from '../../../public/assets/en/translation.json';
import keyWord from '../../../public/assets/keyword/keyword.json';
import { Image } from "@nextui-org/react";
import clsx from "clsx"
import styles from './SocialContact.module.scss';
import { Link } from '@nextui-org/react';
export default function SocialContact() {
     const { t } = useTranslation();
     return (
          <div className={clsx(styles.socialContact)}>
               <h2 className={clsx(styles.headingLv2)}>
                    {t(keyWord.socialContact)}
               </h2>
               <ul className={clsx(styles.listSocial)}>
                    <li>
                         <span>Phone: </span>
                         <Link
                              href='tel:+8481089128'
                              target='_blank'>0981089128</Link>

                    </li>
                    <li>
                         <span>Zalo: </span>
                         <Link
                              href='https://zalo.me/0981081928'
                              target='_blank'>https://zalo.me/0981081928</Link>
                    </li>
                    <li>
                         <span>Email: </span>
                         <Link
                              href="mailto:xuantuananh2212@gmail.com"
                              target='_blank'>xuantuananh2212@gmail.com</Link>
                    </li>
                    <li>
                         <span>Facebook: </span>
                         <Link
                              href='https://www.facebook.com/profile.php?id=100021167121930'
                              target='_blank'>https://www.facebook.com/profile.php?id=100021167121930</Link>
                    </li>
                    <li>
                         <span>Github: </span>
                         <Link
                              href='https://github.com/xuananh2212'
                              target='_blank'>https://github.com/xuananh2212</Link>
                    </li>

               </ul>

               <div className={clsx(styles.hobbies)}>
                    <h2 className={styles.headingLv2}>{t(keyWord.hobbies)}</h2>
                    <ul className={clsx(styles.listHobbies)}>
                         <li>{t(keyWord.hobbies1)}</li>
                         <li>{t(keyWord.hobbies2)}</li>
                         <li>{t(keyWord.hobbies3)}</li>
                    </ul>

               </div>
          </div>

     )
}
