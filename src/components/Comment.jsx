import PropTypes from 'prop-types';

import styles from './Comment.module.css'
import { Trash } from '@phosphor-icons/react';
import { HandsClapping } from '@phosphor-icons/react';

import { Avatar } from './Avatar';
import { dates } from '../support/util/dates';

export function Comment({ content, date, onDeleteComment }) {

  function handleDeleComment() {
    onDeleteComment(content)
  }

  const {
    publishedDateFormatted,
    publishedRelativeDateToNow,
    dateTime
  } = dates(date);

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
                <time title={publishedDateFormatted} dateTime={dateTime}>
                  {publishedRelativeDateToNow}
                </time>
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
  date: PropTypes.instanceOf(Date),
  onDeleteComment: PropTypes.func
}