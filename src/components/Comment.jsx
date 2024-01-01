import PropTypes from 'prop-types';

import styles from './Comment.module.css'
import { Trash } from '@phosphor-icons/react';
import { HandsClapping } from '@phosphor-icons/react';

import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment }) {

  function handleDeleComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/diego3g.png"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
                <strong>Diego Fernandes</strong>
                <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>

            <button 
              onClick={handleDeleComment}
              title='Deletar comentário'>
              
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <HandsClapping/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

Comment.propTypes = {
  content: PropTypes.string,
  onDeleteComment: PropTypes.func
}