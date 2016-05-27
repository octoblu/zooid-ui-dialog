import classNames from 'classnames'
import noop from 'lodash.noop'
import React, { PropTypes } from 'react'

import Body from '../Body'
import Header from '../Header'

import styles from './styles.css'

const propTypes = {
  body: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  onCancel: PropTypes.func,
  show: PropTypes.bool
}

const defaultProps = {
  onCancel: noop
}

const Dialog = ({ body, children, className, show, title }) => {
  if(!show) return null

  let dialogHeader = null
  if (title) dialogHeader = <Header title={title} />

  let dialogBody = null
  if (body) dialogBody = <Body>{ body }</Body>

  return (
    <div className={classNames('Dialog', styles.Dialog, className)}>
      <div className={styles.dialog}>
        {dialogHeader}
        {dialogBody}
        {children}
      </div>
    </div>
  )
}

Dialog.propTypes    = propTypes
Dialog.defaultProps = defaultProps

export default Dialog
