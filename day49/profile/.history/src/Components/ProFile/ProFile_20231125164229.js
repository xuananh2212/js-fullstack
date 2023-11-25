'use client';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import translationVie from '../../../public/assets/vi/translation.json';
import translationEn from '../../../public/assets/en/translation.json';
import keyWord from '../../../public/assets/keyword/keyword.json';
import { Image } from "@nextui-org/react";
import clsx from "clsx"
import styles from './ProFile.module.scss';
import { Tooltip, Button } from "@nextui-org/react";
import { Link } from '@nextui-org/react';
const handleCheckLang = () => {
     const arrayLang = ['en', 'vi'];
     if (!localStorage.getItem('lang') || !arrayLang.includes(localStorage.getItem('lang'))) {
          return 'vi'
     } else {
          return localStorage.getItem('lang');
     }
}
i18n
     .use(initReactI18next)
     .init({
          resources: {
               en: {
                    translation: translationEn
               },
               vi: {
                    translation: translationVie
               }
          },
          lng: handleCheckLang(),
          fallbackLng: "en",
          interpolation: {
               escapeValue: false
          }
     });
export default function ProFile() {
     const { t } = useTranslation();
     return (
          <div className={clsx(styles.proFile)}>
               <div className="container">
                    <div className={clsx(styles.proFileWrap)}>
                         <Tooltip
                              className="capitalize"
                              style={
                                   {
                                        backgroundColor: "greenyellow",
                                        padding: '10px 8px',
                                        borderRadius: "12px",
                                        fontSize: "1.5rem"
                                   }
                              }
                              content={t(keyWord.tooltipTitle)}>
                              <h1 className={clsx(styles.headingLv1, "capitalize")}>
                                   {
                                        t(keyWord.fullName)
                                   }
                              </h1>
                         </Tooltip>

                         <div className={clsx(styles.proFileInner)}>
                              <div className={clsx(styles.proFileLeft)}>
                                   <figure
                                        className={clsx(styles.imgWrap)}
                                   >
                                        <Image
                                             style={{ borderRadius: 12 }}
                                             width={300}
                                             alt="anh dai dien"
                                             src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/278382316_971821593533402_5343784753680002992_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2vduirapYx8AX9Umhue&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCc3i_bQCmr3lnSkU60Xz04qI-l0MNNtX_wobc9w4DPqQ&oe=6566AEB4"
                                        />
                                        <figcaption>
                                             {
                                                  t(keyWord.frontEnd)
                                             }
                                        </figcaption>
                                   </figure>
                                   <div className={styles.skills}>
                                        <h2 className={styles.headingLv2}>{t(keyWord.skills)}</h2>
                                        <p className={clsx(styles.skillWork)}>
                                             <span>
                                                  {t(keyWord.webDeveloper)}:
                                             </span>
                                             React.js, Next.js, Redux, Context, CSS3, HTML5, UI/UX, Figma,...

                                        </p>
                                        <p className={clsx(styles.otherSkills)}>
                                             <span>
                                                  {t(keyWord.otherSkills)}:
                                             </span>
                                             {t(keyWord.otherSkillsDesc)}
                                        </p>

                                   </div>
                                   <ul className={styles.histories}>
                                        <li>
                                             <h2 className={clsx(styles.headingLv2)}>{t(keyWord.histories)}</h2>

                                        </li>
                                        <li>
                                             <span>
                                                  2012-2017:
                                             </span>
                                             {t(keyWord.thcs)}

                                        </li>
                                        <li>
                                             <span>
                                                  2018-2020:
                                             </span>
                                             {t(keyWord.thpt)}
                                        </li>
                                        <li>
                                             <span>
                                                  2020-Đến nay:
                                             </span>
                                             Học Đại Học

                                        </li>

                                   </ul>
                              </div>
                              <div className={clsx(styles.proFileRight)}>
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
                                        <div className={clsx(styles.project)}>
                                             <h2 className={clsx(styles.headingLv2)}>
                                                  {t(keyWord.project)}

                                             </h2>

                                        </div>

                                   </div>

                              </div>

                         </div>
                    </div>
               </div>
          </div>
     )
}
