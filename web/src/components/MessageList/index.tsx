import styles from'./styles.module.scss'

import logoImg from '../../assets/logo.svg'

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg}
       alt="DoWhile 2021" />

       <ul className={styles.messageList}>
        <li className={styles.message}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id tempora autem esse ipsa est unde suscipit adipisci cumque nobis aliquid.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="http://github.com/rodrigoridasi.png" alt="Rodrigo R. da Silva" />
            </div>
            <span>Rodrigo R. da Silva</span>
          </div>
        </li>

        <li className={styles.message}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id tempora autem esse ipsa est unde suscipit adipisci cumque nobis aliquid.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="http://github.com/rodrigoridasi.png" alt="Rodrigo R. da Silva" />
            </div>
            <span>Rodrigo R. da Silva</span>
          </div>
        </li>

        <li className={styles.message}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id tempora autem esse ipsa est unde suscipit adipisci cumque nobis aliquid.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="http://github.com/rodrigoridasi.png" alt="Rodrigo R. da Silva" />
            </div>
            <span>Rodrigo R. da Silva</span>
          </div>
        </li>
       </ul>
    </div>
  )
}