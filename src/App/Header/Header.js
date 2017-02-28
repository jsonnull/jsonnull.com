/* @flow */
import React from 'react'
import styles from './style.css'

const Title = () => (
  <h1 className={styles.title}>Jason Nall</h1>
)

type Props = {}

class Header extends React.Component<*, Props, *> {
  render () {
    return (
      <div>
        <Title />
      </div>
    )
  }
}

export default Header
