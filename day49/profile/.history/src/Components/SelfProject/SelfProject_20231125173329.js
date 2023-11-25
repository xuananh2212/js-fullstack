'use client';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import translationVie from '../../../public/assets/vi/translation.json';
import translationEn from '../../../public/assets/en/translation.json';
import keyWord from '../../../public/assets/keyword/keyword.json';
import clsx from "clsx"
import styles from './SelfProject.module.scss';
import { Tooltip, Button } from "@nextui-org/react";
import { Link } from '@nextui-org/react';
export default function SelfProject() {
     return (
          <div className={clsx(styles.project)}>
               <h2 className={clsx(styles.headingLv2)}>
                    {t(keyWord.project)}

               </h2>
               <ul className={clsx(styles.listProject)}>
                    <li>
                         <p className={clsx(styles.desc)}>
                              <span className={clsx(styles.nameProject)}>
                                   <span >
                                        {t(keyWord.nameProject)} : library management
                                   </span>
                              </span>
                              <span className={clsx(styles.timesProject)}>
                                   <span >
                                        {t(keyWord.timesProject)} : 1 {t(keyWord.month)}
                                   </span>

                              </span>
                              <span className={clsx(styles.usingProject)}>
                                   <span >
                                        {t(keyWord.usingProject)} : java swing,sql server, oop....
                                   </span>
                              </span>
                         </p>
                         <div className={styles.groupBtn}>
                              <Tooltip
                                   className="capitalize"
                                   style={
                                        {
                                             backgroundColor: "rgb(52, 52, 233)",
                                             padding: '10px 8px',
                                             borderRadius: "12px",
                                             fontSize: "1.5rem",
                                             color: "#fff"
                                        }
                                   }
                                   content='https://github.com/xuananh2212/manage-library-java-swing'>
                                   <Link
                                        href='https://github.com/xuananh2212/manage-library-java-swing'
                                        target='_blank'
                                   >
                                        <button className={clsx(styles.btnDemo, "capitalize")}>
                                             Demo
                                        </button>
                                   </Link>
                              </Tooltip>
                              <Tooltip
                                   className="capitalize"
                                   style={
                                        {
                                             backgroundColor: "rgb(230, 10, 230)",
                                             padding: '10px 8px',
                                             borderRadius: "12px",
                                             fontSize: "1.5rem",
                                             color: "#fff"
                                        }
                                   }
                                   content='https://github.com/xuananh2212/manage-library-java-swing'>
                                   <Link
                                        href='https://github.com/xuananh2212/manage-library-java-swing'
                                        target='_blank'
                                   >
                                        <button className={clsx(styles.btnCode, "capitalize")}>
                                             Code
                                        </button>
                                   </Link>
                              </Tooltip>

                         </div>

                    </li>
                    <li>
                         <p className={clsx(styles.desc)}>
                              <span className={clsx(styles.nameProject)}>
                                   <span >
                                        {t(keyWord.nameProject)} : Trello Project mini
                                   </span>
                              </span>
                              <span className={clsx(styles.timesProject)}>
                                   <span >
                                        {t(keyWord.timesProject)} : 3 {t(keyWord.day)}
                                   </span>

                              </span>
                              <span className={clsx(styles.usingProject)}>
                                   <span >
                                        {t(keyWord.usingProject)} : React js
                                   </span>
                              </span>
                         </p>
                         <div className={styles.groupBtn}>
                              <Tooltip
                                   className="capitalize"
                                   style={
                                        {
                                             backgroundColor: "rgb(52, 52, 233)",
                                             padding: '10px 8px',
                                             borderRadius: "12px",
                                             fontSize: "1.5rem",
                                             color: "#fff"
                                        }
                                   }
                                   content='https://js-fullstack-6t83.vercel.app/'>
                                   <Link
                                        href='https://js-fullstack-6t83.vercel.app/'
                                        target='_blank'
                                   >
                                        <button className={clsx(styles.btnDemo, "capitalize")}>
                                             Demo
                                        </button>
                                   </Link>
                              </Tooltip>
                              <Tooltip
                                   className="capitalize"
                                   style={
                                        {
                                             backgroundColor: "rgb(230, 10, 230)",
                                             padding: '10px 8px',
                                             borderRadius: "12px",
                                             fontSize: "1.5rem",
                                             color: "#fff"
                                        }
                                   }
                                   content='https://github.com/xuananh2212/js-fullstack/tree/main/day47'>
                                   <Link
                                        href='https://github.com/xuananh2212/js-fullstack/tree/main/day47'
                                        target='_blank'
                                   >
                                        <button className={clsx(styles.btnCode, "capitalize")}>
                                             Code
                                        </button>
                                   </Link>
                              </Tooltip>

                         </div>

                    </li>
                    <li>
                         <p className={clsx(styles.desc)}>
                              <span className={clsx(styles.nameProject)}>
                                   <span >
                                        {t(keyWord.nameProject)} : Shop Project
                                   </span>
                              </span>
                              <span className={clsx(styles.timesProject)}>
                                   <span >
                                        {t(keyWord.timesProject)} : 2 {t(keyWord.day)}
                                   </span>

                              </span>
                              <span className={clsx(styles.usingProject)}>
                                   <span >
                                        {t(keyWord.usingProject)} : React js
                                   </span>
                              </span>
                         </p>
                         <div className={styles.groupBtn}>
                              <Tooltip
                                   className="capitalize"
                                   style={
                                        {
                                             backgroundColor: "rgb(52, 52, 233)",
                                             padding: '10px 8px',
                                             borderRadius: "12px",
                                             fontSize: "1.5rem",
                                             color: "#fff"
                                        }
                                   }
                                   content='https://js-fullstack-six.vercel.app/product/1'>
                                   <Link
                                        href='https://js-fullstack-six.vercel.app/product/1'
                                        target='_blank'
                                   >
                                        <button className={clsx(styles.btnDemo, "capitalize")}>
                                             Demo
                                        </button>
                                   </Link>
                              </Tooltip>
                              <Tooltip
                                   className="capitalize"
                                   style={
                                        {
                                             backgroundColor: "rgb(230, 10, 230)",
                                             padding: '10px 8px',
                                             borderRadius: "12px",
                                             fontSize: "1.5rem",
                                             color: "#fff"
                                        }
                                   }
                                   content='https://github.com/xuananh2212/js-fullstack/tree/main/day46/shop2'>
                                   <Link
                                        href='https://github.com/xuananh2212/js-fullstack/tree/main/day46/shop2'
                                        target='_blank'
                                   >
                                        <button className={clsx(styles.btnCode, "capitalize")}>
                                             Code
                                        </button>
                                   </Link>
                              </Tooltip>

                         </div>

                    </li>
                    <li>
                         <Link href='https://github.com/xuananh2212/'>
                              https://github.com/xuananh2212
                         </Link>
                    </li>


               </ul>

          </div>
     )
}
