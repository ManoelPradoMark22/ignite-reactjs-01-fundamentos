import PropTypes from 'prop-types';

import styles from './Avatar.module.css';

export function Avatar(props) {
  return (
    <img 
      className={styles.avatar}
      src={props.image}
    />
  )
}

Avatar.propTypes = {
  image: PropTypes.string,
}
