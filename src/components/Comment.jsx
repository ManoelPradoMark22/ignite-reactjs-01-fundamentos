import styles from './Comment.module.css'

import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar image="https://github.com/diego3g.png"/>
    </div>
  )
}