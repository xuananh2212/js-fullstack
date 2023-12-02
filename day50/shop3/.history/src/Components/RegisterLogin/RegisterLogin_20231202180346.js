"use client"
import React from 'react'
import { Dropdown, notification } from 'antd';
import { useCallback } from 'react';
import clsx from 'clsx';
import {
     FaSignOutAlt,
     FaUser,
} from 'react-icons/fa';
import styles from './ResgisterLogin.module.scss'
export default function RegisterLogin() {
     const handleLogout = useCallback(async () => {
          try {
               window.location.href = '/api/auth/signout';
          } catch (error) {
               notification.error({ message: 'Lỗi server', duration: 1.5 });
          }
     }, []);
     const items = [
          {
               label: 'Đăng xuất',
               key: '1',
               icon: <FaSignOutAlt />,
               onClick: handleLogout,
               style: {
                    fontSize: '1.4rem',
                    padding: '0.8rem',
               },
          },
     ];
     return (
          <Dropdown
               menu={{ items }}
               trigger={['hover']}
               placement={'bottomRight'}
          >
               <button className={clsx(styles.btnHeader)}>
                    <FaUser className={styles.icon} />
               </button>
          </Dropdown>
     )
}
