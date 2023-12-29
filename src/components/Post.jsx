import PropTypes from 'prop-types';

import { Avatar } from './Avatar';

import styles from './Post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar image="https://github.com/ManoelPradoMark22.png" />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>FullStack Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime='2022-05-11 00:13:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  )
}

// Post.propTypes = {
//   author: PropTypes.string,
//   content: PropTypes.string,
// }

