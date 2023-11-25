import { useTranslation } from 'react-i18next';
import keyWord from '../../../public/assets/keyword/keyword.json';
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

          </div>

     )
}
