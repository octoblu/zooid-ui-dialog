import classNames from 'classnames'
import noop from 'lodash.noop'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
}

const Body = ({ children }) => {
  const classes = classNames('Dialog-actions', styles.body)
  return <div className={classes}>{children}</div>
}

Body.propTypes = propTypes

export default Body
