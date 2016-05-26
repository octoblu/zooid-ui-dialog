import classNames from 'classnames'
import noop from 'lodash.noop'
import React, { PropTypes } from 'react'
import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onCancel: PropTypes.func,
  show: PropTypes.bool
}

const defaultProps = {
  onCancel: noop
}

const Dialog = ({ show,children, className }) => {
  if(!show) return null

  return (
    <div className={classNames('Dialog', styles.Dialog, className)}>
      <div className={styles.dialog}>
        {children}
      </div>
    </div>
  )
}

Dialog.propTypes    = propTypes
Dialog.defaultProps = defaultProps

export default Dialog
