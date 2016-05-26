import classNames from 'classnames'
import noop from 'lodash.noop'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
}

const Actions = ({ children }) => {
  const classes = classNames('Dialog-actions', styles.actions)

  return <div className={classes}>{children}</div>
}

Actions.propTypes = propTypes

export default Actions
