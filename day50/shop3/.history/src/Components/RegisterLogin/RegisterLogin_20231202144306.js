import React from 'react'
import { Dropdown, notification } from 'antd';
import {
     FaSignOutAlt,
     FaUser,
} from 'react-icons/fa';
export default function RegisterLogin() {
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
