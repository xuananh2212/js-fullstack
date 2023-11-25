

export default function Hobbies() {
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
