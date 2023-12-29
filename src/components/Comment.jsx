import styles from './Comment.module.css'

import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/diego3g.png"
        hasBorder={false}
      />
    </div>
  )
}