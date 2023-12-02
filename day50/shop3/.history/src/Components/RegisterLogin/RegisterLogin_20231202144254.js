import React from 'react'

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
