import classNames from 'classnames'
import noop from 'lodash.noop'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

const Header = ({ children, title }) => {
  let content = title;
  if (children) content = children

  return <header className={styles.header}>{content}</header>
}

Header.propTypes = propTypes

export default Header
